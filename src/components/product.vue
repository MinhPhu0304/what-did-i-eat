<template>
  <div>
    <p v-if="this.$props.product === null">Please scan product</p>
    <div v-if="this.$props.product != null">
      <p v-if="this.$props.product.NOT_FOUND"> {{ this.$props.product.NOT_FOUND }} </p>
    </div>
  </div>
</template>

<script>

import { getChartDataLabel } from '../utils'
export default {
  name: 'Product',
  props: ['product'],
  data: function () {
    return {
      productInfo: { ...this.$props.product },
      chartConfig: {}
    }
  },
  watch: {
    product: function (newValue) {
      if (newValue.nutriscore_data) {
        this.chartConfig = getChartDataLabel(newValue.nutriscore_data, 'Nutrition points')
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>

<!-- Mock data bellow for search by product name -->
<!-- {
  "text": "Haribo",
  "parsed": [],
  "hints": [
    {
      "food": {
        "foodId": "food_a2d3t6ba8vsdyibjl1kwra8d4yoc",
        "label": "Haribo Peaches Gummi Candy Peach",
        "nutrients": {
          "ENERC_KCAL": 341.4634146341463,
          "PROCNT": 4.878048780487805,
          "FAT": 0,
          "CHOCDF": 78.04878048780488
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "SUGAR; CORN SYRUP; GELATIN; CITRIC ACID; CORN STARCH; ARTIFICIAL AND NATURAL FLAVORS; ARTIFICIAL COLORS: YELLOW 5; RED 40",
        "image": "https://www.edamam.com/food-img/8f6/8f6809cb350eb39d8a79b7c321d72c36.png"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pocket",
          "label": "Pocket"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_aouwzn6bbnzb4fa2u4xucaj1cbnp",
        "label": "Haribo - Grapefruit Pamplemousses Candy 5.29 Oz",
        "nutrients": {
          "ENERC_KCAL": 373.41056397372137,
          "PROCNT": 4.667632049671517,
          "FAT": 0,
          "CHOCDF": 88.68500894375882,
          "FIBTG": 0
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Sugar; Corn Syrup; Gelatin; Citric Acid; Fumaric Acid; Starch; Artificial And Natural Flavors; Artificial Color ( Fd&c Red 40 ).",
        "image": "https://www.edamam.com/food-img/703/703732b2cd4e8ba25eaeee8cdfe88106.png"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_agipiigbtdt7u3a4y4fvtbt07mqp",
        "label": "Haribo Fruit Blasts , 5.0 oz",
        "nutrients": {
          "ENERC_KCAL": 395.0683738353007,
          "PROCNT": 0,
          "FAT": 1.2345886682353147,
          "CHOCDF": 91.35956144941329,
          "FIBTG": 0
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Sugar; Corn Syrup; Vegetable Oil; Sorbitol.; Gelatin; Citric Acid; Sodium Hydrogen Carbonate; Natural And Artificial Flavors; Fd & C Yellow 5; Red No.40; Blue 2; Fractionated Coconut Oil; Beeswax Coating.",
        "image": "https://www.edamam.com/food-img/9b7/9b75704f068229d3b7bc2d83eb6ee7fa.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_bc9oigkbs2bjd7abpm9fpbn0sni0",
        "label": "Haribo Licorice Wheels, 5.0 oz",
        "nutrients": {
          "ENERC_KCAL": 275.1369032067272,
          "PROCNT": 6.349313150924474,
          "FAT": 0,
          "CHOCDF": 63.49313150924474
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Brown Sugar Syrup; Wheat Flour; Corn Syrup; Starch; Licorice Extract; Artificial And Natural Flavors; Salt; Beeswax Coating; Carnauba Wax.",
        "image": "https://www.edamam.com/food-img/902/902e532b0901c419fb9e6a63cb889a97.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_al9w9ckbu5ascqbgxgddmbga3rtn",
        "label": "CVS Gummy Candy Haribo Raspberries, 11.0 oz",
        "nutrients": {
          "ENERC_KCAL": 359.15306712300054,
          "PROCNT": 2.565379050878575,
          "FAT": 0,
          "CHOCDF": 92.35364583162871,
          "FIBTG": 0
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Sugar; Corn Syrup; Gelatin; Caramel Color; Artificial Color Red 40; Agar - Agar; Citric Acid; Artificial And Natural Flavors; Beeswax Coating; Carnauba Wax. Packed In A Facility Where Other Products Containing Peanuts; Milk; Wheat; Soy; Tree Nuts; And Eggs Are Packaged.",
        "image": "https://www.edamam.com/food-img/5c5/5c5d9aa9e65dca4249b77fa7085420e1.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_baiwl0gb2ghkogb2lbvgzalgogfb",
        "label": "Haribo Ginger-Lemon Gummi Candy",
        "nutrients": {
          "ENERC_KCAL": 343.921129008409,
          "PROCNT": 2.645547146218531,
          "FAT": 0,
          "CHOCDF": 82.01196153277446
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Corn Syrup; Sugar; Corn Starch; Gelatin; Lemon Juice Concentrate; Citric Acid; Malic Acid; Ginger Concentrate; Artificial And Natural Flavors; Fruit Concentrate ( Elderberry; Orange; Lemon ); Fructose; Invert Sugar Syrup.",
        "image": "https://www.edamam.com/food-img/4c4/4c4d77ac6f427793c087c25124ed4a0e.png"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_bsa6x4obwtpi9haz04r4ba17xn0w",
        "label": "HARIBO, HAPPY COLA CANDY",
        "nutrients": {
          "ENERC_KCAL": 336,
          "PROCNT": 4.699999809265137,
          "FAT": 0.20000000298023224,
          "CHOCDF": 77.5,
          "FIBTG": 0.10000000149011612
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "GLUCOSE SYRUP; SUGAR; DEXTROSE; GELATIN; CITRIC ACID; FLAVOR; GLAZING AGENT: BEESWAX WHITE AND YELLOW; CARNAUBA WAX; ACIDITY REGULATOR: SODIUM CITRATE; CARAMEL SYRUP; STABILIZER: CARRAGEENAN."
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_bjz56ocb7yz8xdbuvw8k5bx8dvwt",
        "label": "Haribo Alphabet Letters Gummi Candy , 5.29 oz",
        "nutrients": {
          "ENERC_KCAL": 346.7383808327412,
          "PROCNT": 8.001654942294028,
          "FAT": 0,
          "CHOCDF": 80.01654942294027
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Corn Syrup; Sugar; Gelatin; Dextrose; Citric Acid; Starch; Artificial And Natural Flavors; Artificial Colors : Fd & C Yellow 5; Red No.40; Blue 2; Fractionated Coconut Oil; Beeswax Coating.",
        "image": "https://www.edamam.com/food-img/c54/c54f462d4a84a7042dd5152f86891441.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    },
    {
      "food": {
        "foodId": "food_bps6k6sbyv4r7gbykmde5bdz9vyd",
        "label": "Haribo Strawberry Wheels , 5.0 lb",
        "nutrients": {
          "ENERC_KCAL": 337.3072611428627,
          "PROCNT": 6.746145222857255,
          "FAT": 0,
          "CHOCDF": 78.7050276000013,
          "FIBTG": 2.2487150742857516
        },
        "brand": "Haribo",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "Corn Syrup; Wheat Flour; Sugar; Citric Acid; Artificial Flavor; Artificial Color : Fd&c Red 40; Partially Hydrogenated Vegetable Oils ( Beeswax; Carnauba Wax ).",
        "image": "https://www.edamam.com/food-img/600/600a3450adb8b5a0bbad3723c95100a5.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound"
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram"
        }
      ]
    }
  ]
}
-->
