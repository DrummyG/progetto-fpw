<template>
    <div class="col-4">
        <img src="../assets/img/template-card.jpeg" alt="">
        <div>
            <p class="nome">GLORBOFRUTTODRILLO</p>
            <p class="tendenza green">&#8593;</p>
            <p class="valore">540.75 USD</p>
        </div>
    </div>
</template>

<style scoped>
    .col-4{
        background-color: var(--color-tertiary-dark);
        padding-top: 15px;
        margin: 20px 10px;
        width: calc(33.33% - 20px);
        border-radius: 20px;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);


        img{
            width: 80%;
            display: block;
            margin: 0 auto;
            border-radius: 20px;
        }
    }

    .nome{
        display: block;
        text-align: center;
        overflow: hidden;
    }

    .tendenza{
        float: left;
        font-size: 20px;
    }

    .valore{
        float: right;
        text-align: end;
        font-size: 20px;
    }

    .green{
        color: greenyellow;
    }

</style>