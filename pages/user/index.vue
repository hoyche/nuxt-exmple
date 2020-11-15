<template>
    <div>
        <!-- <p>用户首页页面组件，登录状态：{{ login_val }}</p> -->
        <nuxt-link to="/user/5">用户5</nuxt-link>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'User',
    layout: 'user',
    async asyncData({ $axios }) {
        const res = await $axios.$get('/api/index/status')
        // console.log(res)
        return res
    },
}
</script>

<!-- <style lang="scss"></style> -->
