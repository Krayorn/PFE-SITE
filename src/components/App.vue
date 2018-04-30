<template>
<div id="app">

    <home></home>
    <concept></concept>
    <partner></partner>
    <contact></contact>

</div>
</template>

<script>
    import Home from '../components/home.vue';
    import Concept from '../components/concept.vue';
    import Partner from '../components/partner.vue';
    import Contact from '../components/contact.vue';


    export default {
        name: 'app',
        data: function() {
            return{
                BRO: 'on est bon mon bro',
            }
        },

        components : {
            Home,
            Concept,
            Partner,
            Contact

        },
    }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>

</style>
