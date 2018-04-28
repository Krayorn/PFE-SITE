<template>
    <div class="yellow">
        {{ concept }}
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data: function() {
            return{
                concept: 'Ici c\'est le contact',
            }
        }
    }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .yellow{
        color: yellow;
    }
</style>
