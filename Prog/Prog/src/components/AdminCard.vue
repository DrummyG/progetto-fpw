<template>
    <div class="AdminCard">
        <slot name="immagine">
            <img src="../assets/img/Admin1.png" alt="Admin1" class="img">
        </slot> 
        <div class="content">
            <h1><slot name="persona">Tizio</slot></h1>
            <p><slot name="descrizione">Desc Tizio</slot></p>
        </div>
    </div>  
</template>
<style>



.AdminCard{
    width: 100%; /* oppure una larghezza fissa come 600px */
    overflow: hidden; /* contiene il float */
    
    
}


/*Desktop*/
@media only screen and (min-width: 768px) {
    .AdminCard img {
        float: left;
        width: 200px;
        height: auto;
        margin-right: 20px;
    }
}


/*Mobile*/
@media only screen and (max-width: 768px) {
    .img{
        width: 100%;
        height: 100%;
    }
}

</style>