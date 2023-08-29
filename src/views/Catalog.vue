<template>
   <div class="products-list">
    <div class="products" v-for="product in productStore.products" :key="product.id">
        <img :src="product.image" alt="">
        <h2>{{ product.title }}</h2>
        <p>{{ product.category }}</p>
        <p>{{ product.price }}</p>

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

const productStore = productsStore()


onMounted(()=>{
    console.log('Monted>>>>');
    productStore.fetchProductsFromDB()
})


</script>