
<script setup>
    import AdminCard from '@/components/AdminCard.vue';
</script>

<template>
    <div class="col-3">
        <h1>Chi siamo</h1>
        <br>
        <p><b>BrainRot</b> Info1</p>
        <p><b>BrainRot</b> Info2</p>
    </div>

    <div id="container"class="col-6">
        <AdminCard>
            <template #immagine>
                <img src="../assets/img/p1.png" alt="Admin1" class="img">
            </template>
            <template #persona>
                Alessandro
            </template>
            <template #descrizione>
                Desc Alessandro
            </template>
        </AdminCard>
        <br>
        <AdminCard>
            <template #immagine>
                <img src="../assets/img/p2.png" alt="Admin2" class="img">
            </template>
            <template #persona>
                Davide
            </template>
            <template #descrizione>
                Desc Davide
            </template>
        </AdminCard>
        <br>
        <AdminCard>
            <template #immagine>
                <img src="../assets/img/p3.png" alt="Admin3" class="img">
            </template>
            <template #persona>
                Emanuele
            </template>
            <template #descrizione>
                Desc Emanuele
            </template>
        </AdminCard>
        <br>
        <AdminCard>
            <template #immagine>
                <img src="../assets/img/p4.png" alt="Admin4" class="img">
            </template>
            <template #persona>
                Francesco
            </template>
            <template #descrizione>
                Desc Francesco
            </template>
        </AdminCard>
    </div>
    <aside class="col-3">Pubblicità</aside>
</template>

<style>
    /*#container{
        display: flex;
        flex-direction: column;
    }*/
</style>
