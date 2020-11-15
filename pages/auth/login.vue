<template>
    <div>
        <p>{{ word }}</p>
        <form @submit="getLoginUrl">
            <div>
                <label>Username</label>
                <input v-model="login.username" type="text" />
            </div>
            <div>
                <label>Password</label>
                <input v-model="login.password" type="text" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Login',
    async asyncData({ $axios }) {
        return await $axios.$get('/api/index/article')
    },
    data() {
        return {
            login: {
                username: '',
                password: '',
            },
        }
    },
    mounted() {
        // console.log(this.$auth)
    },
    methods: {
        getLoginUrl(e) {
            e.preventDefault()
            this.userLogin('/api/index/login')
        },
        async userLogin(e) {
            try {
                const response = await this.$auth.loginWith('custom', {
                    data: this.login,
                    url: e,
                })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>
