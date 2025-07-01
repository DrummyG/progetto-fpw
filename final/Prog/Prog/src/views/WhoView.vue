
<script setup>
    import AdminCard from '@/components/AdminCard.vue';
    import AdsCard from '@/components/AdsCard.vue';
</script>

<template>
    <div class="col-3">
        <h1 id="titoloindice">Chi siamo</h1>
        <ul id="indice">
            <li><a href="#Alessandro">Alessandro</a></li>
            <li><a href="#Davide">Davide</a></li>
            <li><a href="#Emanuele">Emanuele</a></li>
            <li><a href="#Francesco">Francesco</a></li>
        </ul>
    </div>

    <div id="container"class="col-6">
        <AdminCard id="Alessandro">
            <template #immagine>
                <img src="../assets/img/p1.png" alt="Admin1" class="img">
            </template>
            <template #persona>
                Alessandro
            </template>
            <template #descrizione>
                Fa brainstorming anche mentre dorme, parla in font e sogna in RGB. Entra in riunione e dice: “Ho avuto un’idea assurda ieri mentre guardavo un piccione”. Nessuno la capisce ma alla fine vince sempre lei. Usa Canva come arma e Photoshop come religione.
                Filosofia di vita: “Se non è caotico, non è arte 💅🏼”
            </template>
        </AdminCard>
        <br>
        <AdminCard id="Davide">
            <template #immagine>
                <img src="../assets/img/p2.png" alt="Admin2" class="img">
            </template>
            <template #persona>
                Davide
            </template>
            <template #descrizione>
                Sa fare social media, grafica, supporto clienti, rispondere alle mail, montare video, cantare l’Ave Maria a cappella e forse anche pilotare un drone. È ovunque, ma soprattutto nei casini. Nessuno sa da dove prenda l’energia (forse dalle lacrime altrui). 
                Stato mentale: “Tutto sotto controllo 🤡🔥”
            </template>
        </AdminCard>
        <br>
        <AdminCard id="Emanuele">
            <template #immagine>
                <img src="../assets/img/p3.png" alt="Admin3" class="img">
            </template>
            <template #persona>
                Emanuele
            </template>
            <template #descrizione>
                Ha cinque calendari, tre to-do list, due telefoni e zero ore di sonno. Ogni mattina si sveglia, guarda Slack e piange in Helvetica Bold. Vive a base di caffè, ansia e finti sorrisi in call. Nessuno sa cosa faccia davvero, neanche lui. Ma senza di lui il team imploderebbe come un panettone in microonde.
                Mood costante: "Ragazzi mi raccomando la deadLIONEEE"
            </template>
        </AdminCard>
        <br>
        <AdminCard id="Francesco">
            <template #immagine>
                <img src="../assets/img/p4.png" alt="Admin4" class="img">
            </template>
            <template #persona>
                Francesco
            </template>
            <template #descrizione>
                Ha l’occhio sinistro che legge codice e il destro che fissa il vuoto. Nessuno ha mai capito come faccia a risolvere tutto in 5 minuti e poi sparire per 3 giorni. Probabilmente comunica con le intelligenze artificiali tramite pensiero. Il suo IDE è il suo santuario.
                Catchphrase: “Funziona sul mio... quindi boh, è un problema tuo.”
            </template>
        </AdminCard>
    </div>
    <AdsCard :imgSrc="path"></AdsCard>
</template>

<script>
    import path from '@/assets/img/advertisement.png'
</script>

<style scoped>
    img{
        border-radius: 25px;
    }

    #container{
        text-align: left;
    }
</style>
