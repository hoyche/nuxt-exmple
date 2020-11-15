# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

https://www.nuxtjs.cn/guide/views

面组件实际上是 Vue 组件，只不过 Nuxt.js 为这些组件添加了一些特殊的配置项（对应 Nuxt.js 提供的功能特性）

属性名 描述
asyncData   最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
fetch   与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于 fetch 方法的文档。
head    配置当前页面的 Meta 标签, 详情参考 页面头部配置 API。
layout  指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。
loading 如果设置为false，则阻止页面自动调用this.$nuxt.$loading.finish()和this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在 nuxt.config.js 中设置loading的情况下。请参考API 配置 loading 文档。
transition  指定页面切换的过渡动效, 详情请参考 页面过渡动效。
scrollToTop 布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
validate    校验方法用于校验 动态路由的参数。
middleware  指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。
