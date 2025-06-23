
<script >
import ProductCard from '../components/ProductCard.vue';

import * as Api from '@/utils/apis.js';
    export default {
        components: {
            ProductCard
        },
        data() {
            return {
                products: [],
                /*imgPath: "../assets/img/template-card.jpeg",
                name: "BrainRot NoName",
                prezzo: 0*/
            }
        },
        methods: {
            async getProdotti(){
                const data = await Api.getProdotti();
                this.products = data;
            }
        },
        mounted() {
            this.getProdotti();
        }
    }
</script>

<template>
    <aside class="col-3">
        <h1>Novità</h1>
        <p>I nostri ultimi BrainRot</p>
    </aside>
    <article class="col-7 main-content row">
        <h1>Compra la nostra collezione esclusiva</h1>
        <p>I nostri prodotti sono creati a kilometro 0 e non richiedono alcuna energia se non quella di due miniere di carbone situate in Cile.</p>
        
        <hr>
        <article v-for="prodotto in products" :key="prodotto.id">
                <div class="prodotto">
                  <ProductCard :imgSrc="prodotto.img" :nome="prodotto.nome"  :prezzo="prodotto.prezzo" 
                  :descrizione="prodotto.descrizione" :proprietario="prodotto.username" :trend="prodotto.trend" ></ProductCard>
                </div>
        </article>

    </article>
    <aside class="col-2">Pubblicità</aside>
</template>

<style>
     .row{
        text-align: center;
    }
    
</style>
