<template>
    <div>
        <p>查看一个用户的信息</p>
        <p>当前用户id：{{ id }}</p>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'UserId',
    layout: 'user',
    validate({ params }) {
        // 必须是number类型
        return /^\d+$/.test(params.id)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
    },
}
</script>

<!-- <style lang="scss"></style> -->
