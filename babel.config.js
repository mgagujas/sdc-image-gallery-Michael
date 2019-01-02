module.exports = {
    env:{
      test: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          'transform-es2015-modules-commonjs',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-export-namespace-from',
          '@babel/plugin-proposal-throw-expressions',
        ],
        only: ["./**/*.js", "node_modules/jest-runtime"]
      }
    }
};