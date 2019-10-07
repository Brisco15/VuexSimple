import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

 export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Grenn Shells', price: 60},
      {name: 'Red Shells', price: 80},
      {name: 'Green Bay', price: 100},
      {name: 'Black Shells', price: 110}

      ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product =>{
        return {
          name: '**' + product.name + '**',
          price: product.price/2
        }
      });
      return saleProducts;
    }
  }
})