<template>
   <div class="products-list">
    <div class="products" v-for="product in store.products" :key="product.id">

        <img :src="product.image" alt="">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
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

<style scoped>
.products-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.products{
    flex-basis: 28%;
    margin :8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;
    cursor: pointer;
}
.products img{
    width: 70%;
}
</style>