<template>
    <div class="formContent">

        <div class="form">

            <h1>Registrazione</h1>

            <form action="login" method="POST">

                <label for="username">Username: {{ username.length }}/{{ controlloLungo }}</label>
                <input type="text" name="username" id="username" v-model="username" @input="checkLimiteUsername()">

                <label for="password">Password: {{ password.length }}/{{ controlloCorto }}</label>
                <input type="password" name="password" id="password" v-model="password" @input="checkLimitePassword()">

                <label for="nome">Nome: {{ nome.length }}/{{ controlloLungo }}</label>
                <input type="text" name="nome" id="nome" v-model="nome" @input="checkLimiteNome()">

                <label for="cognome">Cognome: {{ cognome.length }}/{{ controlloLungo }}</label>
                <input type="text" name="cognome" id="cognome" v-model="cognome" @input="checkLimiteCognome()">

                <label for="email">E-mail: {{ email.length }}/{{ controlloLungo }}</label>
                <input type="text" name="email" id="email" v-model="email" @input="checkLimiteEmail()">

                <label for="citta">Città: {{ citta.length }}/{{ controlloLungo }}</label>
                <input type="text" name="citta" id="citta" v-model="citta" @input="checkLimiteCitta()">

                <label for="telefono">Numero di telefono: {{ telefono.length }}/{{ controlloCorto }}</label>
                <input type="number" name="telefono" id="telefono" v-model="telefono" @input="checkLimiteTelefono()">

                <label for="genere">Genere</label>
                <select v-model="genere">
                    <option>Maschio</option>
                    <option>Femmina</option>
                    <option>Altro</option>
                </select>


                <input :disabled="campiVuoti()" type="submit" value="Registrati" @click.stop.prevent="addUser()">
            </form>

        </div>

    </div>

</template>


<script>
import * as Api from '@/utils/apis.js';

export default {
    data() {
        return {
            username: '',
            password: '',
            nome: '',
            cognome: '',
            email: '',
            citta: '',
            telefono: '',
            genere: '',
            utenti: [],
            controlloLungo: 50,/*Controllo Username, nome, cognome, email, citta */
            controlloCorto: 20, /*Controllo password, telefono*/
        }
    },

    methods: {
        async addUser() {
            if (this.controlloUtente()) {
                alert('Username non disponibile perchè già utilizzato');
            } else {
                const data = await Api.addUser(this.username, this.password,
                    this.nome, this.cognome, this.email, this.citta, this.telefono, this.genere);

                if (data) {
                    alert('Utente aggiunto');
                    this.$router.push('/');
                } else {
                    alert('Errore');
                }
            }
        },
        async getUserList() {

            const data = await Api.getUserList();
            this.utenti = data;
        },
        controlloUtente() {
            for (let i = 0; i < this.utenti.length; i++) {
                if (this.username == this.utenti[i].username) {
                    return true;
                }
            }

            return false;
        },

        checkLimiteUsername() {
            if (this.username.length > this.controlloLungo) {
                this.username = this.username.substring(0, this.controlloLungo);
            }
        },
        checkLimitePassword() {
            if (this.password.length > this.controlloCorto) {
                this.password = this.password.substring(0, this.controlloCorto);
            }
        },
        checkLimiteNome() {
            if (this.nome.length > this.controlloLungo) {
                this.nome = this.nome.substring(0, this.controlloLungo);
            }
        },
        checkLimiteCognome() {
            if (this.cognome.length > this.controlloLungo) {
                this.cognome = this.cognome.substring(0, this.controlloLungo);
            }
        },

        checkLimiteEmail() {
            if (this.email.length > this.controlloLungo) {
                this.email = this.email.substring(0, this.controlloLungo);
            }
        },

        checkLimiteCitta() {
            if (this.citta.length > this.controlloLungo) {
                this.citta = this.citta.substring(0, this.controlloLungo);
            }
        },
        checkLimiteTelefono() {
            if (this.telefono.length > this.controlloCorto) {
                this.telefono = this.telefono.substring(0, this.controlloCorto);
            }
        },

        campiVuoti() {
            if (this.username == '' || this.password == '' || this.nome == '' || this.cognome == '' ||
                this.email == '' || this.citta == '' || this.telefono == '' || this.genere == '') {
                return true;
            } else {
                return false;
            }
        }
    },

    mounted() {
        this.getUserList();
    }
}

</script>