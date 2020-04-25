<template>
  <div id='app'>
    <Search @onsubmitBarcode='submitBarcode' @submitProductName='submitProductName'/>
    <Product :product="productData"/>
  </div>
</template>

<script>
import Search from './components/search.vue'
import Product from './components/product.vue'

export default {
  name: 'App',
  data: function () {
    return {
      recepies: [],
      productData: null
    }
  },
  components: {
    Search,
    Product
  },
  methods: {
    submitBarcode: async function (barcode) {
      const res = await fetch(
        `/api/food-database/parser?app_id=${process.env.VUE_APP_edamam_APP_ID}&app_key=${process.env.VUE_APP_edamam_API_KEY}&upc=${barcode}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*'
          }
        }
      )
      const data = await res.json()
      if (data.status_verbose === 'product found') {
        const { product } = data
        this.productData = product
      } else {
        this.productData = {
          NOT_FOUND: 'Product not found'
        }
      }
    },
    submitProductName: async function (productName) {
      const res = await fetch(
        `/api/food-database/parser?app_id=${process.env.VUE_APP_edamam_APP_ID}&app_key=${process.env.VUE_APP_edamam_API_KEY}&ingr=${productName}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*'
          }
        }
      )
      const data = await res.json()
      if (data.status_verbose === 'product found') {
        const { product } = data
        this.productData = product
      } else {
        this.productData = {
          NOT_FOUND: 'Product not found'
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>

<!-- 9400556015502 -->
