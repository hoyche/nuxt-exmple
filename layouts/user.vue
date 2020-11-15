<template>
    <div>
        <div class="header">
            <nav>
                <span>布局组件中的导航条</span>
                <nuxt-link to="/">主页</nuxt-link>
                <nuxt-link to="/user">用户中心</nuxt-link>
                <template v-if="info">
                    <!-- <span>{{ info.username }}ID：{{ info.uid }}</span> -->
                    <span>{{ info }}</span>
                    <nuxt-link to="/auth/logout">退出</nuxt-link>
                </template>
                <nuxt-link v-else to="/auth/login">登录</nuxt-link>
                <!-- <span>{{ test }}</span> -->
            </nav>
        </div>
        <div class="content">
            <div class="left">自定义布局组件侧边</div>
            <div class="main">
                <Nuxt />
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return { test: 'test' }
    },
    computed: {
        info() {
            return this.$auth.user
        },
    },
    mounted() {
        // console.log(this.$auth.user, this)
    },
}
</script>
<style lang="scss">
.header {
    padding: 20px;
    background-color: #d00;
    color: #fff;
    a {
        color: #fff;
    }
}
.content {
    display: flex;
    .left {
        padding: 15px;
        background-color: #f5f5f5;
    }
    .main {
        flex: 1;
        padding: 15px;
        background-color: #eee;
    }
}
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
