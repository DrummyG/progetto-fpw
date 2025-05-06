<template>
    <footer class="col-12">
        <div class="info col-4">
            <p>qua ci mettiamo nome, cognome e mail di tutti noi</p>
        </div>
        <div class="copyrights col-4">
            <p>qua ci mettiamo qualche cazzata</p>
        </div>
        <div class="social col-4">
            <p>qua ci saranno i loghi delle pagine social</p>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        background-color: var(--color-primary-light);
        height: 150px;
    }

    .col-12 div{
        display: inline-block;
    }

    .copyrights{
        text-align: center;
    }

    .social{
        text-align: end;
    }


</style>