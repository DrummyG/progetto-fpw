<script setup>
</script>

/*Aggiungere inserimento foto */
<template>
  <div class="formContent">
    <div class="form">
      <h1>Nuovo Brainrot</h1>
      <form action="assBrainRot" method="POST">
        <label for="name">Nome:</label>
        <br>
        <input type="name" id="name" name="name">
        <br>
        <label for="price">Prezzo:</label>
        <input type="text" id="price" name="price" required>
        <br>
        <label for="description">Descrizione: </label>
        <br>
        <textarea id="description" name="description"></textarea>
        <br>
        <input type="submit" value="Add Brainrot">
      </form>
    </div>
  </div>

</template>


<style>
.form textarea {

  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  min-height: 150px;

}

@media screen and (min-width: 768px) {}
</style>