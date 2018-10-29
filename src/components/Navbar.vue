<template>
    <nav>
        <div>
            <router-link class="link_menu" :to="{name:'home'}">Accueil</router-link>
            <router-link class="link_menu" :to="{name:'documentation'}">Documentation</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name : 'Navbar'
    }
</script>

<style scoped>
    body{
        margin: 0;
        padding: 0;
        border: 0;
    }
    nav{
        width: 100%;
        height: 65px;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .link_menu{
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        padding: 5px 10px;
    }

</style>