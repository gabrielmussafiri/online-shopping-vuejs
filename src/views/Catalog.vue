<template>
   <div class="products-list">
    <div class="products" v-for="product in store.products" :key="product.id">

        <img :src="product.image" alt="">
        <h2>{{ product.title }}</h2>
        <p>{{ product.category }}</p>
        <p>${{ product.price }}</p>

    </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name:'CatalogView'
})
</script>

<script setup>
import { onMounted } from 'vue';
import {productsStore} from "../stores/products"

const store = productsStore()


onMounted(async ()=>{
    await store.fetchProductsFromDB()

    console.log('Monted>>>>',store.products);
})

</script>
