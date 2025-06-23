
<script setup>
</script>

<template>
  
  <aside class="col-3">
    <p id="titoloindice">Indice</p>
    <list id="aboutList">
      <ul id="indice">
        <li><a href="#aboutInfo">Cos'è l'italian BrainRot</a></li>
        <li><a href="#aboutWho">Cosa sono gli NFT?</a></li>
        <li><a href="#aboutPrice">Perché unirli?</a></li>            
      </ul>  
    </list>
  </aside>
  <article class="col-6" id="aboutInfo"> 
  
    <h1 id="aboutTitle" >ITALIA NFT BRAINROT</h1>
  
    <p>Benvenuto nel magico mondo del brainrot italiano e degli NFT, dove tutto è possibile e non vogliamo sicuramente solo i tuoi soldi.
    </p>
    <hr>
    <h3 >Cos'è l'italian brainrot</h3>
    <p>Un fenomeno noto come brainrot italiano, una tendenza virale emersa nei primi mesi del 2025 su piattaforme come Instagram e TikTok. Questi contenuti sono caratterizzati da immagini e video di creature assurde e grottesche, spesso generate da intelligenze artificiali, accompagnate da narrazioni surreali e ironiche.
    </p>
    <img class="home-img" src="../assets/img/brainrot-home.webp" alt=""  >
    <hr>

    <h3 id="aboutWho">Cosa sono gli NFT?</h3>
    <p>Gli NFT (Non-Fungible Token) sono certificati digitali unici basati su tecnologia blockchain che attestano l’autenticità e la proprietà di un bene digitale, come immagini, video, musica o oggetti virtuali. A differenza delle criptovalute, gli NFT non sono intercambiabili tra loro perché ciascuno ha caratteristiche distintive.
    </p>
    <img class="home-img" src="../assets/img/NFT-home.jpeg" alt="nft example" >
    <hr>

    <h3 id="aboutPrice">Perché unirli?</h3>
    <p>Perché no? Unisci subito anche tu nel mondo degli NFT e del brainrot, e anche tu riceverai gratis Trallalero Trallalà.
    </p>
    <img class="home-img" src="../assets/img/tralalero-tral-home.jpeg" alt="" >

  </article>
  <aside class="col-3">Pubblicità</aside>
</template>

<style>
*{
  text-align: center;
}  
.home-img{
  
  max-width: 100%;
  border-radius: 25px;
  min-height: 300px;
}
  #titoloindice{
    background: var(--primary);
    font-weight: bold;
    color:(--white);
    font-size: 20px;
    text-align: center;

    padding: 15px 0px 15px 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 0px;
  }
  #indice{
      list-style: none;
      background: var(--secondary);

      margin: 0px;
      padding: 0px 0px 20px 30px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
  }

  #indice li{
      background: var(--white);

      margin-right: 30px;
      padding-top: 10px;
      padding-left: 15px;
  }
  #indice li>a{
      color: var(--tertiary);
  }

  #indice li:last-child{
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
  }

  #aboutTitle{
    text-align: center;
  }
  #aboutInfo{
    font-size: 25px;
  }

  .col-6{
    margin-top: 20px;
    padding: 20px;
    
    background: var(--secondary);
    border-radius: 20px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    min-height: 600px;
  }
  
  
</style>
