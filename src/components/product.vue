<template>
  <div>
    <p v-if="this.$props.product === null">Please scan product</p>
    <div v-if="this.$props.product != null">
      <p v-if="this.$props.product.NOT_FOUND"> {{ this.$props.product.NOT_FOUND }} </p>
      <p v-if="this.$props.product.pnns_groups_1 && this.$props.product.pnns_groups_1 !== 'unknown'"> Type: {{ this.$props.product.pnns_groups_1}} </p>
      <p v-if="this.$props.product.product_name"> {{ this.$props.product.product_name}} </p>
      <p v-if="this.$props.product.traces_from_ingredients">
        The product may contains a trace of:
        <strong> {{ this.$props.product.traces_from_ingredients }}</strong>
      </p>
      <div v-if="this.$props.product.nutrient_levels">
        <div v-for="(value, name) in this.$props.product.nutrient_levels" :key="name">
          <h6>
            {{ name }}: {{ value }}
          </h6>
        </div>
      </div>
      <div v-if="this.$props.product.nutriscore_data">
        <Chart :chartdata="chartConfig.chartData" :options="chartConfig.options"/>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './visualization'

import { getChartDataLabel } from '../utils'
export default {
  name: 'Product',
  props: ['product'],
  components: {
    Chart
  },
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

<!-- Mock data is bellow -->
<!-- {
        last_edit_dates_tags: [
          '2018-10-21',
          '2018-10',
          '2018'
        ],
        pnns_groups_1: 'Beverages',
        nova_group_debug: ' -- categories/en:sodas : 3 -- additives/en:e150c : 4',
        ingredients_n: 6,
        completeness: 0.8,
        image_thumb_url: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.100.jpg',
        additives_n: 2,
        packaging: 'can - metal',
        ingredients_from_palm_oil_n: 0,
        codes_tags: [
          'code-8',
          '04963406',
          '0496340x',
          '049634xx',
          '04963xxx',
          '0496xxxx',
          '049xxxxx',
          '04xxxxxx',
          '0xxxxxxx'
        ],
        data_quality_errors_tags: [],
        ingredients_that_may_be_from_palm_oil_n: 0,
        categories_hierarchy: [
          'en:beverages',
          'en:carbonated-drinks',
          'en:sodas',
          'en:colas',
          'en:sweetened-beverages'
        ],
        serving_quantity: '355',
        traces_from_ingredients: '',
        selected_images: {
          front: {
            display: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.400.jpg'
            },
            small: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.200.jpg'
            },
            thumb: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.100.jpg'
            }
          },
          ingredients: {
            thumb: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/ingredients_en.10.100.jpg'
            },
            display: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/ingredients_en.10.400.jpg'
            },
            small: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/ingredients_en.10.200.jpg'
            }
          },
          nutrition: {
            small: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/nutrition_en.9.200.jpg'
            },
            display: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/nutrition_en.9.400.jpg'
            },
            thumb: {
              en: 'https://static.openfoodfacts.org/images/products/04963406/nutrition_en.9.100.jpg'
            }
          }
        },
        image_ingredients_thumb_url: 'https://static.openfoodfacts.org/images/products/04963406/ingredients_en.10.100.jpg',
        image_nutrition_small_url: 'https://static.openfoodfacts.org/images/products/04963406/nutrition_en.9.200.jpg',
        vitamins_tags: [],
        labels_prev_hierarchy: [],
        ingredients_text_with_allergens_en: 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine',
        serving_size_debug_tags: [],
        brands_tags: [
          'coca-cola'
        ],
        additives_old_n: 1,
        lang: 'en',
        other_nutritional_substances_tags: [],
        editors: [
          '',
          'tacinte',
          'stephane'
        ],
        ingredients_text_en: 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine',
        languages: {
          'en:english': 5
        },
        nutriscore_points: {
          sugars: 8,
          fiber_value: 0,
          saturated_fat_ratio: 0,
          saturated_fat_ratio_value: 0,
          fruits_vegetables_nuts_colza_walnut_olive_oils_value: 0,
          fruits_vegetables_nuts_colza_walnut_olive_oils: 0,
          positive_points: 0,
          saturated_fat_value: 0,
          sodium_value: 12.9,
          fiber: 0,
          energy_value: 165,
          energy: 6,
          proteins_value: 0,
          proteins: 0,
          negative_points: 14,
          sugars_value: 11,
          saturated_fat: 0,
          sodium: 0
        },
        traces_debug_tags: [],
        quantity_debug_tags: [],
        product_name_en_debug_tags: [],
        cities_tags: [],
        new_additives_n: 1,
        ingredients_original_tags: [
          'en:carbonated-water',
          'en:high-fructose-corn-syrup',
          'en:e150a',
          'en:e338',
          'en:caffeine',
          'en:natural-flavouring'
        ],
        nutriments: {
          'nutrition-score-uk_100g': 2,
          'nova-group_100g': 1.13,
          'saturated-fat': 0,
          energy_100g: 165,
          carbohydrates_100g: 11,
          'nutrition-score-fr_100g': 14,
          salt_100g: 0.0322,
          proteins_unit: 'g',
          carbohydrates: 39,
          fat: 0,
          energy_value: 140,
          sugars_100g: 11,
          'saturated-fat_serving': 0,
          proteins_serving: 0,
          salt_value: 0.1143,
          salt_serving: 0.1143,
          'nova-group': 4,
          sodium: 0.04572,
          sugars_value: 39,
          'nova-group_serving': 4,
          proteins: 0,
          fat_serving: 0,
          fat_value: 0,
          carbohydrates_unit: 'g',
          sugars: 39,
          sodium_serving: 0.04572,
          fat_100g: 0,
          carbohydrates_value: 39,
          energy_serving: 586,
          sodium_100g: 0.0129,
          'nutrition-score-fr': 14,
          sodium_value: 0.04572,
          sugars_serving: 39,
          carbohydrates_serving: 39,
          'saturated-fat_100g': 0,
          salt: 0.1143,
          energy_unit: 'kcal',
          salt_unit: 'g',
          'saturated-fat_value': 0,
          'nutrition-score-uk': 2,
          'saturated-fat_unit': 'g',
          proteins_value: 0,
          energy: 586,
          fat_unit: 'g',
          sodium_unit: 'g',
          sugars_unit: 'g',
          proteins_100g: 0
        },
        minerals_tags: [],
        purchase_places: 'Chicago,Illinois,USA',
        nutrition_data_prepared: '',
        categories_lc: 'en',
        countries_tags: [
          'en:united-states'
        ],
        nutrition_data_per: 'serving',
        expiration_date_debug_tags: [],
        completed_t: 1421397673,
        purchase_places_tags: [
          'chicago',
          'illinois',
          'usa'
        ],
        nutrition_data: 'on',
        generic_name_en_debug_tags: [],
        emb_codes_tags: [],
        nucleotides_tags: [],
        allergens_tags: [],
        nutrition_grades_tags: [
          'e'
        ],
        labels_prev_tags: [],
        pnns_groups_2_tags: [
          'sweetened-beverages',
          'known'
        ],
        complete: 1,
        image_url: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.400.jpg',
        additives_old_tags: [
          'en:e150c'
        ],
        entry_dates_tags: [
          '2013-08-01',
          '2013-08',
          '2013'
        ],
        informers_tags: [
          'openfoodfacts-contributors',
          'tacinte',
          'stephane'
        ],
        countries_hierarchy: [
          'en:united-states'
        ],
        purchase_places_debug_tags: [],
        manufacturing_places: '',
        image_nutrition_url: 'https://static.openfoodfacts.org/images/products/04963406/nutrition_en.9.400.jpg',
        last_image_t: 1478331702,
        nutrition_grade_fr: 'e',
        nutriscore_grade: 'e',
        nutrition_grades: 'e',
        amino_acids_tags: [],
        ingredients_text_en_debug_tags: [],
        additives_original_tags: [
          'en:e150c',
          'en:e338'
        ],
        image_ingredients_small_url: 'https://static.openfoodfacts.org/images/products/04963406/ingredients_en.10.200.jpg',
        nutrition_data_prepared_per_debug_tags: [],
        ingredients_debug: [
          'Carbonated Water',
          ',',
          null,
          null,
          null,
          ' High Fructose Corn Syrup',
          ',',
          null,
          null,
          null,
          ' Caramel Color',
          ',',
          null,
          null,
          null,
          ' Phosphoric Acid',
          ',',
          null,
          null,
          null,
          ' ',
          ':',
          ':',
          null,
          null,
          ' Natural Flavors ',
          ':',
          ':',
          null,
          null,
          ' ',
          ',',
          null,
          null,
          null,
          ' Caffeine'
        ],
        link_debug_tags: [],
        emb_codes: '',
        product_name_en: 'Coca-Cola',
        ingredients_from_palm_oil_tags: [],
        allergens_debug_tags: [],
        additives_tags: [
          'en:e150c',
          'en:e338'
        ],
        ingredients_tags: [
          'en:carbonated-water',
          'en:water',
          'en:high-fructose-corn-syrup',
          'en:glucose',
          'en:fructose',
          'en:corn-syrup',
          'en:glucose-fructose-syrup',
          'en:e150a',
          'en:e338',
          'en:caffeine',
          'en:natural-flavouring',
          'en:flavouring'
        ],
        origins_debug_tags: [],
        data_quality_info_tags: [
          'en:nutriscore-computations-same-score',
          'en:nutriscore-computations-same-grade'
        ],
        image_nutrition_thumb_url: 'https://static.openfoodfacts.org/images/products/04963406/nutrition_en.9.100.jpg',
        stores_debug_tags: [],
        ingredients_that_may_be_from_palm_oil_tags: [],
        product_quantity: '360',
        allergens: '',
        additives_prev_original_tags: [
          'en:e150a',
          'en:e338'
        ],
        generic_name: '',
        lc: 'en',
        languages_tags: [
          'en:english',
          'en:1'
        ],
        image_front_small_url: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.200.jpg',
        labels: '',
        nova_groups_tags: [
          'en:4-ultra-processed-food-and-drink-products'
        ],
        categories_tags: [
          'en:beverages',
          'en:carbonated-drinks',
          'en:sodas',
          'en:colas',
          'en:sweetened-beverages',
          'en:non-alcoholic-beverages'
        ],
        ingredients: [
          {
            text: 'Carbonated Water',
            vegan: 'yes',
            rank: 1,
            vegetarian: 'yes',
            id: 'en:carbonated-water'
          },
          {
            text: 'High Fructose Corn Syrup',
            vegan: 'yes',
            rank: 2,
            vegetarian: 'yes',
            id: 'en:high-fructose-corn-syrup'
          },
          {
            text: 'Caramel Color',
            id: 'en:e150a',
            vegetarian: 'yes',
            vegan: 'yes',
            rank: 3
          },
          {
            vegetarian: 'yes',
            vegan: 'yes',
            rank: 4,
            id: 'en:e338',
            text: 'Phosphoric Acid'
          },
          {
            text: 'Caffeine',
            vegetarian: 'yes',
            vegan: 'yes',
            rank: 5,
            id: 'en:caffeine'
          },
          {
            id: 'en:natural-flavouring',
            vegetarian: 'maybe',
            vegan: 'maybe',
            text: 'Natural Flavors'
          }
        ],
        scans_n: 23,
        ingredients_n_tags: [
          '6',
          '1-10'
        ],
        languages_codes: {
          en: 5
        },
        nova_group: '4',
        debug_param_sorted_langs: [
          'en'
        ],
        states_tags: [
          'en:to-be-checked',
          'en:complete',
          'en:nutrition-facts-completed',
          'en:ingredients-completed',
          'en:expiration-date-to-be-completed',
          'en:packaging-code-to-be-completed',
          'en:characteristics-completed',
          'en:categories-completed',
          'en:brands-completed',
          'en:packaging-completed',
          'en:quantity-completed',
          'en:product-name-completed',
          'en:photos-validated',
          'en:photos-uploaded'
        ],
        popularity_tags: [
          'top-50000-scans-2019',
          'top-100000-scans-2019',
          'at-least-5-scans-2019',
          'at-least-10-scans-2019',
          'top-country-us-scans-2019',
          'at-least-5-us-scans-2019',
          'at-least-10-us-scans-2019'
        ],
        traces_from_user: '(en)',
        amino_acids_prev_tags: [],
        nova_groups: '4',
        brands_debug_tags: [],
        checkers_tags: [],
        vitamins_prev_tags: [],
        traces_tags: [],
        last_image_dates_tags: [
          '2016-11-05',
          '2016-11',
          '2016'
        ],
        ingredients_text_debug: 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, : Natural Flavors : , Caffeine',
        _id: '04963406',
        additives_debug_tags: [],
        ingredients_text_with_allergens: 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine',
        lang_debug_tags: [],
        _keywords: [
          'coca',
          'beverage',
          'cola',
          'coca-cola',
          'carbonated',
          'drink',
          'soda',
          'sugared'
        ],
        image_small_url: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.200.jpg',
        interface_version_modified: '20120622',
        unknown_nutrients_tags: [],
        brands: 'Coca Cola',
        origins: '',
        nutrition_data_prepared_per: '100g',
        labels_tags: [],
        update_key: 'quality2',
        'fruits-vegetables-nuts_100g_estimate': 0,
        data_quality_bugs_tags: [],
        data_quality_warnings_tags: [],
        countries_debug_tags: [],
        ingredients_analysis_tags: [
          'en:palm-oil-free',
          'en:maybe-vegan',
          'en:maybe-vegetarian'
        ],
        image_front_thumb_url: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.100.jpg',
        last_modified_by: 'cc0000',
        nucleotides_prev_tags: [],
        traces: '',
        nutriscore_score: 14,
        unique_scans_n: 19,
        pnns_groups_2: 'Sweetened beverages',
        countries_lc: 'en',
        last_editor: 'cc0000',
        no_nutrition_data: '',
        additives_tags_n: null,
        categories: 'Beverages, Carbonated drinks, Sodas, Colas, Sweetened beverages',
        ingredients_from_or_that_may_be_from_palm_oil_n: 0,
        ingredients_hierarchy: [
          'en:carbonated-water',
          'en:water',
          'en:high-fructose-corn-syrup',
          'en:glucose',
          'en:fructose',
          'en:corn-syrup',
          'en:glucose-fructose-syrup',
          'en:e150a',
          'en:e338',
          'en:caffeine',
          'en:natural-flavouring',
          'en:flavouring'
        ],
        manufacturing_places_debug_tags: [],
        minerals_prev_tags: [],
        manufacturing_places_tags: [],
        expiration_date: '',
        sortkey: 301540096187,
        serving_size: '355 ml',
        photographers_tags: [
          'openfoodfacts-contributors',
          'tacinte',
          'stephane',
          'alexfloresveliz'
        ],
        countries: 'United States',
        nutrition_score_warning_no_fruits_vegetables_nuts: 1,
        image_ingredients_url: 'https://static.openfoodfacts.org/images/products/04963406/ingredients_en.10.400.jpg',
        interface_version_created: '20130323.jqm',
        emb_codes_debug_tags: [],
        last_modified_t: 1540096187,
        states: 'en:to-be-checked, en:complete, en:nutrition-facts-completed, en:ingredients-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-completed, en:categories-completed, en:brands-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-validated, en:photos-uploaded',
        ingredients_text: 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine',
        origins_tags: [],
        nutrient_levels_tags: [
          'en:fat-in-low-quantity',
          'en:saturated-fat-in-low-quantity',
          'en:sugars-in-high-quantity',
          'en:salt-in-low-quantity'
        ],
        code: '04963406',
        id: '04963406',
        link: '',
        traces_hierarchy: [],
        unknown_ingredients_n: 0,
        data_quality_tags: [
          'en:nutriscore-computations-same-score',
          'en:nutriscore-computations-same-grade'
        ],
        labels_lc: 'en',
        ingredients_ids_debug: [
          'carbonated-water',
          'high-fructose-corn-syrup',
          'caramel-color',
          'phosphoric-acid',
          'natural-flavors',
          'caffeine'
        ],
        stores_tags: [],
        compared_to_category: 'en:non-alcoholic-beverages',
        allergens_hierarchy: [],
        max_imgid: '11',
        emb_codes_20141016: '',
        misc_tags: [
          'en:nutrition-no-fruits-vegetables-nuts',
          'en:nutrition-no-fiber-or-fruits-vegetables-nuts',
          'en:nutriscore-computed'
        ],
        languages_hierarchy: [
          'en:english'
        ],
        images: {
          1: {
            uploaded_t: 1375384725,
            uploader: 'openfoodfacts-contributors',
            sizes: {
              100: {
                h: 100,
                w: 75
              },
              400: {
                w: 300,
                h: 400
              },
              full: {
                h: 3264,
                w: 2448
              }
            }
          },
          2: {
            sizes: {
              100: {
                h: 100,
                w: 74
              },
              400: {
                h: 400,
                w: 297
              },
              full: {
                h: 4208,
                w: 3120
              }
            },
            uploaded_t: 1421397406,
            uploader: 'tacinte'
          },
          3: {
            sizes: {
              100: {
                w: 74,
                h: 100
              },
              400: {
                h: 400,
                w: 297
              },
              full: {
                h: 4208,
                w: 3120
              }
            },
            uploader: 'tacinte',
            uploaded_t: 1421397412
          },
          4: {
            sizes: {
              100: {
                w: 74,
                h: 100
              },
              400: {
                w: 297,
                h: 400
              },
              full: {
                h: 4208,
                w: 3120
              }
            },
            uploader: 'tacinte',
            uploaded_t: 1421397413
          },
          5: {
            sizes: {
              100: {
                w: 100,
                h: 75
              },
              400: {
                w: 400,
                h: 300
              },
              full: {
                h: 2448,
                w: 3264
              }
            },
            uploader: 'stephane',
            uploaded_t: '1374776967'
          },
          6: {
            sizes: {
              100: {
                h: 75,
                w: 100
              },
              400: {
                w: 400,
                h: 300
              },
              full: {
                w: 3264,
                h: 2448
              }
            },
            uploader: 'stephane',
            uploaded_t: '1374776970'
          },
          7: {
            uploader: 'stephane',
            uploaded_t: '1374776974',
            sizes: {
              100: {
                h: 75,
                w: 100
              },
              400: {
                w: 400,
                h: 300
              },
              full: {
                w: 3264,
                h: 2448
              }
            }
          },
          8: {
            sizes: {
              100: {
                h: 75,
                w: 100
              },
              400: {
                h: 300,
                w: 400
              },
              full: {
                w: 3264,
                h: 2448
              }
            },
            uploaded_t: '1374776980',
            uploader: 'stephane'
          },
          9: {
            sizes: {
              100: {
                h: 75,
                w: 100
              },
              400: {
                h: 300,
                w: 400
              },
              full: {
                w: 3264,
                h: 2448
              }
            },
            uploaded_t: '1374776984',
            uploader: 'stephane'
          },
          10: {
            uploader: 'stephane',
            uploaded_t: '1374776998',
            sizes: {
              100: {
                h: 75,
                w: 100
              },
              400: {
                h: 300,
                w: 400
              },
              full: {
                h: 2448,
                w: 3264
              }
            }
          },
          11: {
            uploader: 'alexfloresveliz',
            uploaded_t: '1478331702',
            sizes: {
              100: {
                h: 100,
                w: 58
              },
              400: {
                w: 233,
                h: 400
              },
              full: {
                h: 516,
                w: 300
              }
            }
          },
          ingredients_en: {
            rev: '10',
            geometry: '1355x473-777-2377',
            normalize: null,
            sizes: {
              100: {
                h: 35,
                w: 100
              },
              200: {
                w: 200,
                h: 70
              },
              400: {
                w: 400,
                h: 140
              },
              full: {
                w: 1355,
                h: 473
              }
            },
            white_magic: null,
            imgid: '3'
          },
          nutrition_en: {
            rev: '9',
            geometry: '1303x2325-798-147',
            normalize: 'checked',
            sizes: {
              100: {
                h: 100,
                w: 56
              },
              200: {
                h: 200,
                w: 112
              },
              400: {
                h: 400,
                w: 224
              },
              full: {
                h: 2325,
                w: 1303
              }
            },
            white_magic: null,
            imgid: '3'
          },
          ingredients: {
            rev: '10',
            geometry: '1355x473-777-2377',
            normalize: null,
            sizes: {
              100: {
                h: 35,
                w: 100
              },
              200: {
                w: 200,
                h: 70
              },
              400: {
                w: 400,
                h: 140
              },
              full: {
                w: 1355,
                h: 473
              }
            },
            white_magic: null,
            imgid: '3'
          },
          front: {
            imgid: '2',
            white_magic: null,
            sizes: {
              100: {
                h: 100,
                w: 53
              },
              200: {
                h: 200,
                w: 106
              },
              400: {
                h: 400,
                w: 212
              },
              full: {
                w: 2027,
                h: 3819
              }
            },
            normalize: null,
            geometry: '2027x3819-546-94',
            rev: '8'
          },
          nutrition: {
            rev: '9',
            geometry: '1303x2325-798-147',
            normalize: 'checked',
            sizes: {
              100: {
                h: 100,
                w: 56
              },
              200: {
                h: 200,
                w: 112
              },
              400: {
                h: 400,
                w: 224
              },
              full: {
                h: 2325,
                w: 1303
              }
            },
            white_magic: null,
            imgid: '3'
          },
          front_en: {
            imgid: '11',
            angle: '0',
            y2: '0',
            normalize: 'false',
            white_magic: 'false',
            sizes: {
              100: {
                w: 58,
                h: 100
              },
              200: {
                h: 200,
                w: 116
              },
              400: {
                w: 233,
                h: 400
              },
              full: {
                h: 516,
                w: 300
              }
            },
            geometry: '0x0-0-0',
            y1: '0',
            x2: '0',
            x1: '0',
            rev: '21'
          }
        },
        stores: '',
        nutrient_levels: {
          'saturated-fat': 'low',
          sugars: 'high',
          salt: 'low',
          fat: 'low'
        },
        nutrition_score_beverage: 1,
        correctors_tags: [
          'tacinte',
          'alexfloresveliz',
          'cc0000'
        ],
        rev: 23,
        pnns_groups_1_tags: [
          'beverages',
          'known'
        ],
        labels_hierarchy: [],
        generic_name_en: '',
        quantity: '12 fl oz (355 ml)',
        packaging_debug_tags: [],
        image_front_url: 'https://static.openfoodfacts.org/images/products/04963406/front_en.21.400.jpg',
        creator: 'openfoodfacts-contributors',
        states_hierarchy: [
          'en:to-be-checked',
          'en:complete',
          'en:nutrition-facts-completed',
          'en:ingredients-completed',
          'en:expiration-date-to-be-completed',
          'en:packaging-code-to-be-completed',
          'en:characteristics-completed',
          'en:categories-completed',
          'en:brands-completed',
          'en:packaging-completed',
          'en:quantity-completed',
          'en:product-name-completed',
          'en:photos-validated',
          'en:photos-uploaded'
        ],
        product_name: 'Coca-Cola',
        emb_codes_orig: '',
        nutrition_data_per_debug_tags: [],
        nutrition_score_debug: ' -- in beverages category - a_points_fr_beverage: 6 (energy) + 0 (sat_fat) + 8 (sugars) + 0 (sodium) = 14 -  -- energy 0 + sat-fat 0 + fr-sat-fat-for-fats 0 + sugars 2 + sodium 0 - fruits 0% 0 - fiber 0 - proteins 0 -- fsa 2 -- fr 14',
        editors_tags: [
          'alexfloresveliz',
          'tacinte',
          'cc0000',
          'openfoodfacts-contributors',
          'stephane'
        ],
        allergens_from_user: '(en)',
        packaging_tags: [
          'can-metal'
        ],
        created_t: 1375384688,
        allergens_from_ingredients: ''
      }-->
