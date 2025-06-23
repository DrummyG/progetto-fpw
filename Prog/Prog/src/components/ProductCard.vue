<template>
  <div class='col-4'>
    <img :src="imgSrc" @error="onImageError" alt="Brainrot Image" />
    <div>
        <p class="nome">{{ nome }}</p>
        <p class="descrizione">{{descrizione || 'Descrizione'}}</p>
        <p class="proprietario">Proprietario: <br> <span id="proprietario-id">{{ proprietario }}</span></p>
        <div class="trend-prezzo">
            <p :class="['tendenza', trend ? 'green' : 'red']">
            {{ trend ? '↑' : '↓' }}</p>
            <p class="prezzo">{{ prezzo }} USD</p>
        </div>

    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/img/template-card.jpeg';

export default {
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    nome: String,
    prezzo: {
      type: Number,
      default: 0
    },
    descrizione: {
      type: String,
      default: ''
    }, 
    proprietario: {
      type: String,
      default: ''
    },
    trend:{
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
      imgSrcOverride: null
    };
  },
  computed: {
    imgSrc() {
      // Se è stato impostato un fallback via onImageError, usa quello
      if (this.imgSrcOverride) return this.imgSrcOverride;

      // Se imgPath è valido, crea il path completo
      if (this.imgSrc) {
        return this.imgSrc.startsWith('/') ? this.imgSrc : '/' + this.imgSrc;
      }

      // Altrimenti usa immagine di default
      return defaultImage;
    }
  },
  methods: {
    onImageError() {
      this.imgSrcOverride = defaultImage;
    }
  }
};
</script>

<style scoped>
.col-4 {
  background-color: var(--color-tertiary-dark);
  padding-top: 15px;
  padding-bottom: 60px;
  margin: 20px 10px;
  width: calc(33.33% - 20px);
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  min-height: 350px;
  max-height: 550px;
}

#proprietario-id {
  font-weight: bold;
  font-size: 30px;
  color: var(--tertiary);
}

img {
  width: 80%;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
}

.nome{
    display: block;
    text-align: center;
    overflow: hidden;
}

.tendenza{
    float: left;
    font-size: 20px;
}

.prezzo{
    float: right;
    text-align: end;
    font-size: 20px;
}

.green {
  color: greenyellow;
}
.red {
  color: red;
}
.descrizione {
  font-size: 14px;
  color: var(--color-secondary);
  text-align: center;
  overflow: auto;
  margin-top: 10px;
  max-height: 130px;
}

.descrizione::-webkit-scrollbar {
  width: 10px; /* larghezza della scrollbar verticale */
}

.descrizione::-webkit-scrollbar-track {
  background: none; /* colore di sfondo della traccia */
}

.descrizione::-webkit-scrollbar-thumb {
  background-color: var(--color-tertiary-light); /* colore del "pollice" */
  border-radius: 6px; /* angoli arrotondati */
}



/*Mobile*/
@media only screen and (max-width: 768px) {
    [class*="col-4"] {
      width: 100%;
      min-height: 800px;
    }
}
/*Mini*/
@media only screen and (max-width: 500px) {
    [class*="col-4"] {
      width: 100%;
      min-height: 600px;
    }
}
</style>
