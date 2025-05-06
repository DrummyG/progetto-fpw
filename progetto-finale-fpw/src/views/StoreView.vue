<script setup>
    import Card from '@/components/Card.vue';
</script>

<template>
    <div class="col-6 main-content row">
        <h1>Compra la nostra collezione esclusiva</h1>
        <p>I nostri prodotti sono creati a kilometro 0 e non richiedono alcuna energia se non quella di due miniere di carbone situate in Cile.</p>
        
        <hr>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
</template>

<style scoped>
    .row{
        text-align: center;
    }

    p{
        margin: 15px;
    }

</style>