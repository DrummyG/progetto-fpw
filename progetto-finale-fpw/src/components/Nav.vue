<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">Su di noi</RouterLink>
            </li>
            <li>
                <RouterLink to="/store">Compra ora</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    nav{
    text-align: center;
    position: sticky;
    top: 0px;
    }

    nav li {
    list-style-type: none;

    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;

    border-left: 2px solid var(--color-tertiary-light);
}

nav li:first-child {
    border-left: none;
}

a:link {
    text-decoration: none;
    font-size: 20px;
}
</style>