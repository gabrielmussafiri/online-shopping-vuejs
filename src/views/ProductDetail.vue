<template>
    <button @click="router.push({name: 'Catalog'})"> Back to catalogue</button>
    <div class="product">
        <div class="product-image">
            <img :src="selectedProduct.image" alt="">
        </div>
        <div class="products-details">
            <p>{{ selectedProduct.title }}</p>
            <p>{{ selectedProduct.description }}</p>
            <h2>${{ selectedProduct.price }}</h2>
            <button @click="addToCart">Add to cart</button>

        </div>


    </div>
</template>



<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductDetails'
})
</script>

<script setup>

import { computed } from 'vue';
import { productsStore } from '../stores/products';
import { useRoute , useRouter } from 'vue-router';

const store = productsStore();
const route = useRoute();
const router = useRouter();

const selectedProduct = computed(()=>{
    return store.products.find((item)=> item.id === Number(route.params.id))
})

const addToCart =  ()=>{
   store.addToCart(selectedProduct.value);
    
}


</script>

<style scoped>
 .product{
    display: flex;
    margin-top: 50px;
 }

 .product-image{
    margin-right: 24px;
 }
</style>