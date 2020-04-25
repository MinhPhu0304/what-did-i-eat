<template>
  <div id="app">
    <Search @onsubmitBarcode="submitBarcode" @submitProductName="submitProductName" />
    <Product :product="productData" />
  </div>
</template>

<script>
import Search from './components/search.vue'
import Product from './components/product.vue'

import { getDefaultHeader } from './utils'

export default {
  name: 'App',
  data: function () {
    return {
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
        `https://api.edamam.com/api/food-database/parser?app_id=${process.env.VUE_APP_edamam_APP_ID}&app_key=${process.env.VUE_APP_edamam_API_KEY}&upc=${barcode}`,
        {
          headers: getDefaultHeader()
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
      try {
        const res = await fetch(
          `https://api.edamam.com/api/food-database/parser?app_id=${process.env.VUE_APP_edamam_APP_ID}&app_key=${process.env.VUE_APP_edamam_API_KEY}&ingr=${productName}`,
          {
            headers: getDefaultHeader()
          }
        )
        if (!res.ok) throw new Error('Not Found')
        const data = await res.json().catch(e => console.log(e))
        if (data.hints.length > 0) {
          const { hints } = data
          this.productData = hints
        } else {
          throw new Error('Product Not Found')
        }
      } catch (e) {
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
