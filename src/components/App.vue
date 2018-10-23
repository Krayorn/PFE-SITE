<template>
    <div id="app">

        <Navbar />

        <router-view></router-view>

    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'

    export default {
        name: 'app',
        data: () => {
            return{
                //BRO: 'on est bon mon bro',
            }
        },
        components: {
            Navbar
        }
    }
    console.log("coucou")

</script>

<style scoped>


</style>
