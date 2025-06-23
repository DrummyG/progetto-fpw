<template>
    <div class="col-12">
        <p>Benvuento {{ username }}</p>
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
import { useSessionStore } from '@/stores/session'
import * as Auth from '@/utils/auth.js'

export default {
  data() {
    return {
      username: '',
      sessionStore: useSessionStore()
    };
  },
  methods: {
    async logout(){
        await Auth.logout()
        this.sessionStore.setUser(null)
        this.$router.push('/')
    },
    getUser(){
        this.username = this.sessionStore.getUser()
    }
  },
  mounted(){
    this.getUser();
  }
}
</script>