<template>
  <div>
    <p v-if="this.$props.product == null">Please scan product</p>
    <div v-if="this.$props.product != null">
      <p v-if="this.$props.product.NOT_FOUND"> {{ this.$props.product.NOT_FOUND }} </p>
    </div>
    <div v-if="this.$props.product != null" class="product__container">
      <div class="productDescription" v-for="foodProduct in this.$props.product" :key="foodProduct.food.foodId">
        <div class="product">
          <h2> {{foodProduct.food.label}}</h2>
          <img v-bind:src="foodProduct.food.image" />
          <Visualization v-bind:data="foodProduct.food.nutrients" css-classes="chart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Visualization from './visualization'

export default {
  name: 'Product',
  components: {
    Visualization
  },
  props: ['product']
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.product {
  margin: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media screen and (min-width: 480px) {
  .product__container{
    display: grid;
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 768px) {
  .product__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1280px) {
  .product__container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.product img {
  border-radius: 10px;
}
.product__container {
  column-gap: 16px;
  row-gap: 16px;
}
.chart {
  width: 400px;
}
</style>
