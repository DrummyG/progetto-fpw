<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <div class="col-12 formContent">
        <div class="form">
            <img class="logo" src="../assets/img/logo.png" alt="Logo Colto e Mangiato" width="200">
            <h1>Login</h1>
            <form action="login" method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" v-model="username" required>
                <br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" v-model="password" required>
                <br>
                <input type="submit" value="Login" @click.stop.prevent="login()">
            </form>
        </div>
    </div>
</template>


<style>
@media screen and (min-width: 768px) {}
</style>

<script>
import { useSessionStore } from '@/stores/session'
import * as Auth from '@/utils/auth.js'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const data = await Auth.login(this.username, this.password)
            console.log(data.userId)

            if (data.userId) {
                useSessionStore().setUser(data.userId)
                this.$router.push('/')
            } else {
                alert('login fallito')
            }
        }
    }
}
</script>