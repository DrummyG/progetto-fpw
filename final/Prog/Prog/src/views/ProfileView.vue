<script>
import { useSessionStore } from '@/stores/session';
import * as Auth from '@/utils/auth.js'
import * as Api from '@/utils/apis.js'

export default {
  data() {
    return {
      username: '',
      password: '',
      sessionStore: useSessionStore(),
      controllo: false,
      vecchiaPassword: '',
      nuovaPassword: '',
      confermaPassword: '',
      maxChar: 20,
    }
  },

  methods: {
    async logout() {
      await Auth.logout();
      this.sessionStore.setUser(null);
      this.$router.push('/');
    },

    getUser() {
      this.username = this.sessionStore.getUser();
    },

    async getUserById(username) {
      const data = await Api.getUserById(username);
      
      this.password = data[0].password;

    },

    visualizzaCambiaPassword() {

      this.controllo = !this.controllo;
    },

    async updatePassword() {
      if (this.passwordDiversa()) {
        alert('La password vecchia è sbagliata');
      } else {
        const data = await Api.updatePassword(this.nuovaPassword);
        if (data) {
          alert('Password aggiornata');
          this.$router.push('/');
        } else {
          alert('Errore');
        }
      }
    },

    checkLimiteVecchiaPassword() {
      if (this.vecchiaPassword.length > this.maxChar) {
        this.vecchiaPassword = this.vecchiaPassword.substring(0, this.maxChar);
      }
    },

    checkLimiteNuovaPassword() {
      if (this.nuovaPassword.length > this.maxChar) {
        this.nuovaPassword = this.nuovaPassword.substring(0, this.maxChar);
      }
    },

    checkLimiteConfermaPassword() {
      if (this.confermaPassword.length > this.maxChar) {
        this.confermaPassword = this.confermaPassword.substring(0, this.maxChar);
      }
    },

    passwordDiversa() {
      if (this.password != this.vecchiaPassword) {
        return true;
      } else {
        return false;
      }
    },

    passwordUgualeVecchia() {
      if (this.vecchiaPassword == this.nuovaPassword && !this.campiVuoti()) {
        return true;
      } else {
        return false;
      }
    },

    confermaPasswordDiversa() {
      if (this.nuovaPassword != this.confermaPassword && !this.campiVuoti()) {
        return true;
      } else {
        return false;
      }
    },

    campiVuoti() {
      if (this.vecchiaPassword == '' || this.nuovaPassword == '' || this.confermaPassword == '') {
        return true;
      } else {
        return false;
      }
    },

    controlloPassword() {
      if (this.passwordUgualeVecchia() || this.confermaPasswordDiversa() || this.campiVuoti()) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getUser();
    this.getUserById(this.sessionStore.getUser());
  }
}
</script>

<template>

  <article class="profile">
    <h1>Profilo</h1>

    <p>Benvenuto {{ username }}</p>

    <button @click="logout()">Logout</button>

    <button @click="visualizzaCambiaPassword()">Modifica Password</button>

    <div v-show="controllo" class="passwordForm">
      <form action="password" method="POST">

        <label for="vecchia password">Vecchia Password: {{ vecchiaPassword.length }}/{{ maxChar }}</label>
        <input type="password" name="vecchiaPassword" id="vecchiaPassword" v-model="vecchiaPassword"
          @input="checkLimiteVecchiaPassword()">

        <label for="nuova password">Nuova Password: {{ nuovaPassword.length }}/{{ maxChar }}</label>
        <input type="password" name="nuovaPassword" id="nuovaPassword" v-model="nuovaPassword"
          @input="checkLimiteNuovaPassword()">
        <p v-if="passwordUgualeVecchia()">La nuova password deve essere diversa da quella vecchia</p>

        <label for="conferma password">Conferma Password: {{ confermaPassword.length }}/{{ maxChar }}</label>
        <input type="password" name="confermaPassword" id="confermaPassword" v-model="confermaPassword"
          @input="checkLimiteConfermaPassword()">
        <p v-if="confermaPasswordDiversa()">La conferma è diversa dalla password inserita</p>

        <input :disabled="controlloPassword()" type="submit" value="Modifica" @click.stop.prevent="updatePassword()">
      </form>
    </div>

  </article>

</template>

<style>
li {
  list-style-type: none;
  align-items: center;
}
</style>