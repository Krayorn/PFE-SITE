<template>
    <div class="green">
        {{ accueil }}
    </div>
</template>

<script>
    export default {
        name: 'home',
        data: function() {
            return{
                accueil: 'Ici c\'est l\'accueil',
            }
        }
    }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .green{
        color: green;
    }
</style>
