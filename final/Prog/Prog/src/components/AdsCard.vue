<template>

    <div class="col-3">
    <p id="titoloindice">Pubblicità</p>
    <img :src="imgSrc" @error="onImageError" alt="Brainrot Image"/>
    </div>

</template>

<script>
import defaultImage from '@/assets/img/logo.png';

export default {
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
  },


  data() {
    return {
        imgPath: '',
        imgSrcOverride: null
    };
  },


  computedImgSrc: {
    imgSrc() {

      if (this.imgSrcOverride) return this.imgSrcOverride;


      if (this.imgPath) {
        return this.imgPath.startsWith('/') ? this.imgPath : '/' + this.imgPath;
      }


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
    .col-3{
        overflow: hidden;
    }

    img{
        width: 100%;
    }

  </style>
