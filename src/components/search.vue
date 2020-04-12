<template>
  <div>
    <video
      id="video"
      width="300"
      height="200"
      ref="scanner">
    </video>
    <button v-on:click="stopRecord"> Stop record </button>
    <button v-on:click="start"> Start recording </button>
  </div>
</template>

<script>
import { BrowserMultiFormatReader, Exception } from '@zxing/library'

export default {
  name: 'Search',
  data: function () {
    return {
      ingredients: '',
      barCodeReader: new BrowserMultiFormatReader(),
      isMediaStreamAPISupported:
        navigator &&
        navigator.mediaDevices &&
        'enumerateDevices' in navigator.mediaDevices
    }
  },
  mounted () {
    if (!this.isMediaStreamAPISupported) {
      throw new Exception('Media Stream API is not supported')
    }
    this.start()
  },
  methods: {
    start () {
      this.barCodeReader.decodeOnceFromVideoDevice(undefined, 'video').then((result) => {
        if (result) {
          this.$emit('onsubmitBarcode', result.text)
        }
      }).catch((err) => {
        console.error(err)
      })
    },
    stopRecord () {
      this.barCodeReader.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
