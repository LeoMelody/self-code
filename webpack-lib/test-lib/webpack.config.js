const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
    // 对于没有列入到entry中的文件，则使用这个规则
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        resolve:{
          extensions: ['.ts', '.js']
        }
      }
    ]
  }
}
