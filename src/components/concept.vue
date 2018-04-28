<template>
    <div class="blue">
        {{ concept }}
    </div>
</template>

<script>
    export default {
        name: 'concept',
        data: function() {
            return{
                concept: 'Ici c\'est le concept',
            }
        }
    }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .blue{
        color: blue;
    }
</style>
