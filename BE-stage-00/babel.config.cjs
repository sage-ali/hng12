module.exports = function (api) {
  // Check if the environment is 'test' (Jest)
  const isJest = api.env('test');

  const presets = [
    [
      '@babel/preset-env',
      {
        // Node version for Jest, or browsers for production
        targets: isJest ? { node: 'current' } : '> 0.25%, not dead',
        // Convert to CommonJS for Jest, keep ES Modules for everything else
        modules: isJest ? 'commonjs' : false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = ['@babel/plugin-transform-runtime'];

  return { presets, plugins };
};
