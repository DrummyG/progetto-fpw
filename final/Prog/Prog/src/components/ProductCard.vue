<template>
  <div class='col-12'>
    <p class="nome">{{ nome }}</p>
    <img :src="imgSrc" @error="onImageError" alt="Brainrot Image" />
    <div class="text-wrapper">
      <p class="descrizione">{{ descrizione || 'Descrizione' }}</p>
      <div class="bottom-info">
        <p class="proprietario">Proprietario: <br> <span id="proprietario-id">{{ proprietario }}</span></p>
        <div class="trend-prezzo">
          <p :class="['tendenza', trend ? 'green' : 'red']">
            {{ trend ? '↑' : '↓' }}</p>
          <p class="prezzo">{{ prezzo }} USD</p>
        </div>
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
    trend: {
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
.col-12 {
  position: relative;
  background-color: var(--color-tertiary-dark);
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 20px 10px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: table;
}

#proprietario-id {
  font-weight: bold;
  font-size: 20px;
  color: var(--tertiary);
}

img {
  width: 35%;
  float: left;
  margin: 0 auto;
  border-radius: 20px;
}

.text-wrapper {
  float: left;
  width:calc(65% - 20px);
  margin-left: 20px;
  padding-bottom: 100px;
}

.bottom-info {
  position: absolute;
  bottom: 0;
  right: 15px;
  width: calc(65% - 40px);
}

.nome {
  display: block;
  text-align: center;
  overflow: hidden;
  font-size: 25px;
}

.tendenza {
  float: left;
  font-size: 20px;
}

.prezzo {
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
  text-align: justify;
  overflow: auto;
  margin-top: 10px;
  max-height: 130px;
  margin-right: 10px;
}

.descrizione::-webkit-scrollbar {
  width: 10px;
  /* larghezza della scrollbar verticale */
}

.descrizione::-webkit-scrollbar-track {
  background: none;
  /* colore di sfondo della traccia */
}

.descrizione::-webkit-scrollbar-thumb {
  background-color: var(--color-tertiary-light);
  /* colore del "pollice" */
  border-radius: 6px;
  /* angoli arrotondati */
}

@media only screen and (min-width: 768px) {}

@media (min-width: 769px) and (max-width: 1250px) {}

/*Mobile*/
@media only screen and (max-width: 768px) {
  [class*="col-12"] {
    width: 100%;
  }

  img {
    width: 100%;
  }

  .text-wrapper {
    width: calc(100% - 20px);
    padding-bottom: 0px;
  }

  .bottom-info {
    position:static;
    width: 100%;
  }
}
</style>
