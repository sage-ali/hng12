const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const { log, error } = require('console');

// Custom logger function
const logger = (message, type = 'log') => {
  if (type === 'error') {
    error(message);
  } else {
    log(message);
  }
};

logger('Starting the watcher...');

// Specify the directories to watch and extensions to filter
const watchedDirectories = ['./src', './test'];
const extensions = ['js', 'mjs', 'cjs', 'ts', 'jsx', 'tsx'];

// Helper function to check if a file has a desired extension
const hasValidExtension = (filePath) =>
  extensions.some((ext) => filePath.endsWith(`.${ext}`));

// Function to get the current directory from ES Module
const getDirname = () => {
  const filename = __filename;
  return path.dirname(filename);
};

// Read the file paths from text-exempt.txt and store them in an array
const exemptFilePath = path.resolve(getDirname(), 'test-exempt.txt');
const exemptFiles = fs
  .readFileSync(exemptFilePath, 'utf-8')
  .split('\n')
  .filter(Boolean);

logger(`Watching directories: ${watchedDirectories.join(', ')}`);

const watcher = chokidar.watch(watchedDirectories, {
  // Ignore dotfiles
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

// Event: File changed
watcher.on('change', (filePath) => {
  if (hasValidExtension(filePath)) {
    logger(`File changed: ${filePath}`);
    lintFile(filePath);
  }
});

// Event: File added
watcher.on('add', (filePath) => {
  logger(`File added: ${filePath}`);
  const srcDIR = 'src/';
  const testDIR = 'test/';

  if (!filePath.startsWith(srcDIR)) {
    return;
  }

  if (hasValidExtension(filePath)) {
    const testFilePath = filePath
      .replace(srcDIR, testDIR)
      .replace(/\.(js|mjs|cjs|ts|jsx|tsx)$/, '.test.$1');

    const relativeFilePath = filePath.replace(srcDIR, '');

    // Check if the file is in the src directory and if the corresponding test file does not exist
    if (
      filePath.startsWith(srcDIR) &&
      !exemptFiles.includes(filePath) &&
      !fs.existsSync(testFilePath) &&
      !/\.test\.(js|mjs|cjs|ts|jsx|tsx)$/.test(filePath)
    ) {
      const testFileContent = `// Test for src/${relativeFilePath}\n\ntest('${relativeFilePath}', () => {\n  // Add your tests here\n  expect(true).toBe(true);\n});\n`;

      fs.mkdirSync(path.dirname(testFilePath), { recursive: true });
      fs.writeFileSync(testFilePath, testFileContent);

      logger(`Test file created: ${testFilePath}`);
    }
  }
});

// Lint file function
const lintFile = (filePath) => {
  const absoluteFilePath = path.resolve(getDirname(), '..', filePath);
  logger(`${absoluteFilePath.replace('/home/sage-ali/hng/BE-stage-01/', '')}`);
  exec(
    `eslint ${absoluteFilePath.replace('/home/sage-ali/hng/BE-stage-01/', '')}`,
    { cwd: path.resolve(getDirname(), '..') },
    (error, stdout, stderr) => {
      if (error) {
        logger(`Error linting file: ${filePath}`, 'error');
        logger(stderr || error.message, 'error');
        return;
      }
      if (stdout) {
        logger(`ESLint Output for ${filePath}:\n${stdout}`);
      }
    }
  );
};

logger('Ctrl+C to stop the watcher.');
