<script setup>
</script>

<template>
    <div class="col-12 formContent">
        <div class="form">
            <img class="logo" src="../assets/img/logo.png" alt="Logo Colto e Mangiato" width="200">
            <h1>Login</h1>
            <form action="login" method="POST">
                <label for="username">Username: {{ username.length }}/{{controlloLungo}}</label>
                <input type="text" name="username" id="username" v-model="username" @input="checkLimiteUsername()">

                <label for="password">Password: {{ password.length }}/{{ controlloCorto }}</label>
                <input type="password" name="password" id="password" v-model="password" @input="checkLimitePassword()">

                <input :disabled="campiVuoti()" type="submit" value="Accedi" @click.stop.prevent="login()">
            </form>
        </div>
    </div>
</template>


<script>
import { useSessionStore } from '@/stores/session'
import * as Auth from '@/utils/auth.js'


export default {
    data() {
        return {
            username: '',
            password: '',
            controlloLungo: 50, /*Controllo Username */
            controlloCorto: 20, /*Controllo password*/
        }
    },
    methods: {
        /* */
        async login() {
            const data = await Auth.login(this.username, this.password)

            if (data.userId) {
                useSessionStore().setUser(data.userId)
                this.$router.push('/')
            } else {
                alert(data.message)
            }
        },

        checkLimiteUsername() {
            if(this.username.length > this.controlloLungo) {
                this.username = this.username.substring(0, this.controlloLungo);
            }
        },

        checkLimitePassword() {
            if(this.password.length > this.controlloCorto) {
                this.password = this.password.substring(0, this.controlloCorto);
            }
        },

        campiVuoti() {
            if(this.username == '' || this.password == '') {
                return true;
            } else {
                return false;
            }
        },
    },
}

</script>



<style>
#registrazioneContent {
    height: 700px;
    width: auto;
}

@media only screen and (max-width: 768px) {

    #registrazioneForm {
        top: 105%;
    }
}

@media only screen and (min-width: 768px) {

    #registrazioneForm {
        top: 80%;
    }
}

#registrazioneForm {
        text-align: center;
        background: var(--primario);
        color: var(--bianco);

        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 20px;
        margin: 0;

        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }


#registrazioneForm h1 {
    color: var(--bianco);
}

#registrazioneForm input {
    display: block;
    width: 66%;
    margin-left: 16%;
    margin-top: 2%;
}

#registrazioneForm input[type="submit"] {
    background: var(--bianco);
    color: var(--primario);
    font-weight: bold;
    cursor: pointer;

    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
}

#registrazioneForm input[type="submit"]:hover {
    background: var(--secondario);
    color: var(--bianco);
}

#registrazioneForm label {
    font-weight: bold;
}
</style>