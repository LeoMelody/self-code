module.exports = function useVueLoader(config) {
    config
        .module
        .rule('vue')
        .test(/\.vue$/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .end()
        .end();
    return config;
}
