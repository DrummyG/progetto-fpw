

<template>
  <header class="header">
    <img class="logo" src="../assets/img/logo.png" alt="Logo Colto e Mangiato" width="200">
    <div class="banner-text">
      ITALIAN BRAINROT NFT TM 
    </div>
   
  </header>
  
</template>

<style>
.navbar-container {
    display: block;
    align-items: center;
    width: 100%;
    margin-top: 150px;
}
.header{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%; /* oppure una larghezza fissa come 600px */
    overflow: hidden; /* contiene il float */
}

.banner-text{
        color: var(--tertiary);
        font-size: 30px;
      }
/*Desktop*/
@media only screen and (min-width: 768px) {
    .header img {
        float: left;
        width: 200px;
        height: auto;
        margin-right: 20px;
    }
    .banner-text{
        font-size: 50px;
        text-align: left;
        margin-top: 10px;
    }
}


/*Mobile*/
@media only screen and (max-width: 768px) {
    .img{
        width: 100%;
        height: 100%;
    }
    .navbar-container {
        margin-top: 20px;
    }
}


</style>