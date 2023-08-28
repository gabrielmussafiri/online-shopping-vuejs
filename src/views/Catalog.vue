<template>
    <h1>
        Catalogue
    </h1>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name:'CatalogView'
})
</script>

<script setup>
import { onMounted } from 'vue';


onMounted(()=>{
    console.log('Monted>>>>');
})


</script>