export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt-全局配置的文档标题',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['element-ui/lib/theme-chalk/index.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['@/plugins/element-ui'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // eslint 选项配置
    // https://go.nuxtjs.dev/eslint
    eslint: {
        // 自动修复
        fix: true
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://auth.nuxtjs.org/
        '@nuxtjs/auth',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        proxy: true
    },
    // 本地服务器接口转发
    proxy: {
        // '/api/': 'http://t.elecfans.net/'
        '/api/': { target: 'http://t.elecfans.net', pathRewrite: { '/api/': '' } }
    },


    // https://auth.nuxtjs.org/schemes/local.html#options
    // 设置auth模块方案
    auth: {
        strategies: {
            // 内置方案
            // local: {
            //     endpoints: {
            //         login: { url: '/api/index/login', method: 'post' },
            //     },
            //     tokenRequired: false,
            //     tokenType: false
            // }

            // 自定义方案
            // https://auth.nuxtjs.org/guide/scheme.html#creating-your-own-scheme
            custom: {
                _scheme: '~/schemes/customScheme',
                endpoints: {
                    // 可以不指明url，到调用该方案登录时指明，这个对象基本就是axios的请求选项
                    login: { method: 'post' },
                    logout: { url: '/api/index/logout', method: 'get' },
                    // 提供获取用户信息配置，可以从this.$auth.user拿到用户信息了，它的值是接口返回的propertyName指定的键值
                    // user: { url: '/api/index/status', method: 'get', propertyName: 'info' },
                },
                // tokenRequired: false,
                // tokenType: false
            }
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/, '@nuxtjs/auth'],
    },
}
