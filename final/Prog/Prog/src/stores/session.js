import {defineStore} from 'pinia'

export const useSessionStore = defineStore('session', {

    state: () => ({
        user: null,
    }),
    actions: {
        setUser(user) {
            this.user = user
        },

        getUser() {
            return this.user
        }
    },

    persist: {
        storage: sessionStorage,
        path: ['user'],
    },
})