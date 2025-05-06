<script setup>
import Nav from './Nav.vue';
</script>

<template>
    <header>
        <div class="box">
            <img src="../assets/img/logo.png" alt="">
            <h1>ITALIAN BRAINROT NFT <sup>TM</sup></h1>
        </div>
        <Nav></Nav>
    </header>
</template>

<style scoped>
header{
    background-color: var(--color-primary-light);
    padding: 20px;
}

.box{
    height: 70px;
    overflow: hidden;
    margin: 0;
}

h1{
    display: inline-block;
    height: 100px;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    margin-left: 15px;
}

img{
    max-height: 70px;
}


sup{
    font-size: small;
}
</style>