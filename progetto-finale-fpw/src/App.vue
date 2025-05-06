<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Aside from './components/Aside.vue'
import Ads from './components/Ads.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <main>
    <Aside></Aside>
    <RouterView />
    <Ads></Ads>
  </main>
  <Footer></Footer>
  
</template>

<style>
  main{
  }
</style>
