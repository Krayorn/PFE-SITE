<template>
    <div class="red">
        {{ partner }}
    </div>
</template>

<script>
    export default {
        name: 'partner',
        data: function() {
            return{
                partner: 'Ici c\'est le partner',
            }
        }
    }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .red{
        color: red;
    }
</style>
