module.exports = function (api) {
  const isJest = api.env('test'); // Check if the environment is 'test' (Jest)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: isJest ? { node: 'current' } : '> 0.25%, not dead', // Node version for Jest, or browsers for production
        modules: isJest ? 'commonjs' : false, // Convert to CommonJS for Jest, keep ES Modules for everything else
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = ['@babel/plugin-transform-runtime'];

  return { presets, plugins };
};
