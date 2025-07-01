<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="cols">
    <RouterView />
    <Footer></Footer>
  </div>
 
</template>

<style scoped>
.cols {
  overflow: hidden;
}

</style>
