import { defineStore } from 'pinia'

export const productsStore = defineStore('products',{
  state : () => ({
    products: []
  }),

  actions:{
    async fetchProductsFromDB(){
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        this.products = json; 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }
})
