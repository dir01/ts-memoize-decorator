module.exports = {
    presets: ['@babel/preset-typescript', ['@babel/preset-env', { targets: { node: 'current' } }]],
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], '@babel/plugin-proposal-optional-chaining'],
};
