import chalk from 'chalk';
import dotenv from 'dotenv';

// Custom logger function
const logger = (message, type = 'log') => {
  if (type === 'error') {
    console.error(chalk.red(message));
  } else {
    console.log(chalk.green(message));
  }
};

// Load environment variables from .env file
dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';

// Log the environment and server details
if (process.env.NODE_ENV === 'production') {
  logger(chalk.green('Starting the production server...'));
} else {
  logger(chalk.green('Starting the development server...'));
}

logger(chalk.green(`Environment: ${NODE_ENV}`));

logger('Press Ctrl+C to stop the server.');
