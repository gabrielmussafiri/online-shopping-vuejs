import { defineStore } from 'pinia'


export default productStore = defineStore('products',{
  state :()=>({
    products:[]
  }),

  actions:{
    fetchProductsFromDB(){
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json.products;
      })
    }
  }

})