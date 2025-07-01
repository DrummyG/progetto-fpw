<script setup>
   import { RouterLink} from 'vue-router' 
</script>

<template>
  <nav class="navbar">
    <ul>
        <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>

        <li v-show="checkUser()"><RouterLink to="/products" exact-active-class="active">Prodotti</RouterLink></li>

        <li><RouterLink to="/who" exact-active-class="active">Chi siamo</RouterLink></li>

        <li v-show="checkUser()"><RouterLink to="/insert" exact-active-class="active">Aggiungi Prodotto</RouterLink></li>
        <li v-show="checkUser()"><RouterLink to="/profile" exact-active-class="active">Profilo</RouterLink></li> 

        <li v-show="!checkUser()"><RouterLink to="/login" exact-active-class="active">Login</RouterLink></li> 
        <li v-show="!checkUser()"><RouterLink to="/subscribe" exact-active-class="active">Iscriviti</RouterLink></li> 
    </ul>
</nav>
</template>

<style scoped>



nav li>a {
  color: var(--tertiary);
}
a:link {
  text-decoration: none;
  font-size: 30px;
}



/*Desktop*/
@media only screen and (min-width: 768px) {
  .navbar {
    position: sticky;
    top: 0;
    z-index: 9;
  }
  nav li {
    list-style-type: none;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 5px solid var(--primary);
    margin-top: 20px;
    margin-bottom: 20px;
    
    
  }

  
  nav li:first-child {
    border-left: none;
  }

  
}

.active {
  font-weight: bold;
  font-size: 40px;
}

/*Mobile*/
@media only screen and (max-width: 768px) {
    .navbar {
        position: static;
    }
    nav li {
    list-style-type: none;
    
  }

  ul{
    padding: 0;
  }
   
}
</style>

<script>

import { useSessionStore } from '@/stores/session'
export default {
  components: {
    RouterLink
  },
  data(){
    return{
      sessionStore: useSessionStore()
    }
  },
  methods: {
    checkUser(){
      if(this.sessionStore.getUser() == null){
        return false
      }else{
        return true
      }
    }
  }
}
</script>