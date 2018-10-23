<template>
    <nav>
        <div>
            <router-link :to="{name:'home'}">Accueil</router-link>
            <router-link :to="{name:'documentation'}">Documentation</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name : 'Navbar'
    }
</script>

<style scoped>

</style>