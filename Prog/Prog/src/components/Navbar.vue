<script>
   import { RouterLink} from 'vue-router' 
</script>
<template>
    <nav class="navbar">
      <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          
          <li><RouterLink to="/products">Prodotti</RouterLink></li>
        
          <li><RouterLink to="/insert">Aggiungi Prodotto</RouterLink></li> 
          <li><RouterLink to="/login">Login</RouterLink></li>   
          <li><RouterLink to="/who">Chi siamo</RouterLink></li>   
          
   
      </ul>     
  </nav>
</template>

<style>



nav li>a {
  color: var(--tertiary);
}
a:link {
  text-decoration: none;
  font-size: 30px;
}

a:hover {
  font-weight: bold;
  color: var(--primary);  
}



/*Desktop*/
@media only screen and (min-width: 768px) {
  .navbar {
    position: sticky;
    z-index: 9;
  }
  nav li {
    list-style-type: none;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 5px solid var(--primary);
    margin-top: 10px;
    margin-bottom: 10px;
    
    
  }

  
  nav li:first-child {
    border-left: none;
  }

  
}


/*Mobile*/
@media only screen and (max-width: 768px) {
    .navbar {
        position: static;
    }
    nav li {
    list-style-type: none;
    
  }
   
}
</style>