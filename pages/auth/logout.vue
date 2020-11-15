<template>
    <div>我要退出了</div>
</template>
<script>
export default {
    name: 'Logout',
    mounted() {
        this.$auth.logout()
    },
}
</script>
