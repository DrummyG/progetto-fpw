/*Aggiungere inserimento foto */
<template>
  <div class="formContent">
    <div class="form">
      <h1>Nuovo Brainrot</h1>
      <form>
        <label for="name">Nome: {{ nome.length }}/{{ maxCharNome }}</label>
        <br>
        <input type="text" id="name" name="name" v-model="nome" @input="checkNumCharNome()">
        <br>
        <label for="price">Prezzo: <b v-if="prezzo < 1 || prezzo > 9999">importo non valido</b></label>
        <input type="number" id="price" name="price" v-model="prezzo" :style="prezzoStyle">
        <br>
        <label for="description">Descrizione: {{ descrizione.length }}/{{ maxCharDescrizione }}</label>
        <br>
        <textarea id="description" name="description" v-model="descrizione"
          @input="checkNumCharDescrizione()"></textarea>
        <br>
        <button :disabled="!nome || !descrizione || prezzo === 0" @click="addProduct()">
          Aggiungi Brainrot
        </button>
      </form>
    </div>
  </div>

</template>



<script>
import { useSessionStore } from '@/stores/session'
import * as Api from '@/utils/apis.js'

export default {
  data() {
    return {
      nome: '',
      prezzo: 1,
      descrizione: '',
      tendenza: true,
      immagine: '',
      username: '',
      maxCharDescrizione: 500,
      maxCharNome: 30,
      sessionStore: useSessionStore(),
      prezzoStyle: {
        color: 'black'
      }
    }
  },

  watch: {
    prezzo: {
      handler() {
        this.checkPrezzo();
        console.log(this.prezzo)
      }
    }
  },

  mounted() {
    this.getUser();
  },



  methods: {
    async addProduct() {
      if (!this.nome || !this.descrizione || this.prezzo === 0) {
        alert('Compila tutti i campi obbligatori');
      } else {
        const data = await Api.addProduct(this.nome, this.prezzo, this.immagine, this.tendenza, this.descrizione, this.username);
        if (data) {
          alert('Prodotto aggiunto');
          this.$router.push('/');
        } else {
          console.log(data);
          alert('Errore');
        }
      }
    },

    checkNumCharDescrizione() {
      if (this.descrizione.length > this.maxCharDescrizione) {
        this.descrizione = this.descrizione.substring(0, this.maxCharDescrizione);
      }
    },

    checkNumCharNome() {
      if (this.nome.length > this.maxCharNome) {
        this.nome = this.nome.substring(0, this.maxCharNome);
      }
    },

    checkPrezzo() {
      if (this.prezzo < 1 || this.prezzo > 9999.99) {
        this.prezzoStyle.color = 'red';
        return true;
      } else {
        this.prezzoStyle.color = 'black';
        return false;
      }
    },

    getUser() {
      this.username = this.sessionStore.getUser();
    },
  }
}
</script>



<style>
.form textarea {

  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  min-height: 150px;

}

@media screen and (min-width: 768px) {}
</style>