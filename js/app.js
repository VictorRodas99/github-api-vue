const { createApp } = Vue


createApp({
    data() {
        return {
            user: null,
            userData: {}
        }
    },

    methods: {
        async getData() {
            const user = this.user
            this.userData = await getDataAPI(user)
        }
    }
}).mount('#app')