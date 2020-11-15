import LocalScheme from '@nuxtjs/auth/lib/schemes/local'

import Element from 'element-ui'

export default class CustomScheme extends LocalScheme {
    // Override `fetchUser` method of `local` scheme
    async fetchUser(endpoint) {
        // Token is required but not available
        if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
            return
        }

        // User endpoint is disabled.
        if (!this.options.endpoints.user) {
            this.$auth.setUser({})
            return
        }

        // Try to fetch user
        const user = await this.$auth.requestWith(
            this.name,
            endpoint,
            this.options.endpoints.user
        )
// console.log(user)
        // Transform the user object
        const customUser = {
            ...user,
            // roles: ['user']
        }

        // Set the custom user
        // The `customUser` object will be accessible through `this.$auth.user`
        // Like `this.$auth.user.fullName` or `this.$auth.user.roles`
        this.$auth.setUser(customUser)
    }

    async login(endpoint) {
        if (!this.options.endpoints.login) {
            return
        }

        // Ditch any leftover local tokens before attempting to log in
        await this.$auth.reset()

        const { response, result } = await this.$auth.request(
            endpoint,
            this.options.endpoints.login,
            true
        );

        // 判断没有登录失败
        if (result.code != 0) {
            throw new Error('pwd or uname error')
            return response;
        }
        // console.log(response, result);

        if (this.options.tokenRequired) {
            const token = this.options.tokenType ?
                this.options.tokenType + ' ' + result :
                result

            this.$auth.setToken(this.name, token)
            this._setToken(token)
        }

        if (this.options.autoFetchUser) {
            await this.fetchUser()
        }

        return response
    }
}
