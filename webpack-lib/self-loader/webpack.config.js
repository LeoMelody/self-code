module.exports = {
    // webpack 配置
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [{
            test: /\.txt$/,
            exclude: /node_modules/,
            use: [{
                loader: './loaders/txt2-loader',
                options: {
                    name: 'wyh'
                }
            }, {
                loader: './loaders/txt-loader'
            }]
        }]
    }
}
