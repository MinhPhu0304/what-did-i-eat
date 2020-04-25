<template>
  <div>
    <p v-if="this.$props.product == null">Please scan product</p>
    <div v-if="this.$props.product != null">
      <p v-if="this.$props.product.NOT_FOUND"> {{ this.$props.product.NOT_FOUND }} </p>
    </div>
    <div v-if="this.$props.product != null">
      <div class="productDescription" v-for="foodProduct in this.$props.product" :key="foodProduct.food.foodId">
        <div>
          <h5> {{foodProduct.food.label}}</h5>
          <img v-bind:src="foodProduct.food.image" />
          <Visualization v-bind:data="foodProduct.food.nutrients" />
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
</style>
