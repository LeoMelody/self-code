const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
const Config = require('webpack-chain');
const path = require('path');
const useVueLoader = require('./useVueLoader');

const config = new Config();
config
    .mode('development')
    .entry('index')
    .add(path.resolve(__dirname, '../src/index.js'))
    .end()
    .output
    .path(path.resolve(__dirname, '../dist'))
    .end();

// webpack-chain的顺序依然是从后到前
// config.module
//     .rule('txt')
//     .test(/\.txt$/)
//         .use('txt-loader')
//         .loader(path.resolve(__dirname, '../loaders/txt-loader.js'))
//     .end()
//         .use('txt2-loader')
//         .loader(path.resolve(__dirname, '../loaders/txt2-loader.js'))
//         .end();

useVueLoader(config);

// 添加bem-loader
config.module
    .rule('vue')
    .before('vue-loader')
    .use('bem-loader')
    .loader(path.resolve(__dirname, '../loaders/bem-loader.js'))
    .end();

const compilerConfig = config.toConfig();

const compiler = webpack(compilerConfig);

compiler.run((err, stats) => {
    if (err) {
        console.log(err);
    }
})
