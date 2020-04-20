<template>
  <div>
    <div class="video__scanner__container">
      <video id="video" width="300" height="200" ref="scanner"></video>
      <button v-on:click="stopRecord">Stop record</button>
      <button v-on:click="start">Start recording</button>
    </div>
    <div>
      <form v-on:submit="onTextInputSubmit">
        <label> Barcode number: <input type="number" v-model="barcodeText"/> </label>
      </form>
    </div>
  </div>
</template>

<script>
import { BrowserMultiFormatReader, Exception } from '@zxing/library'

export default {
  name: 'Search',
  data: function () {
    return {
      barCodeReader: new BrowserMultiFormatReader(),
      isMediaStreamAPISupported:
        navigator &&
        navigator.mediaDevices &&
        'enumerateDevices' in navigator.mediaDevices,
      barcodeText: ''
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
      this.barCodeReader
        .decodeOnceFromVideoDevice(undefined, 'video')
        .then(result => {
          if (result) {
            this.$emit('onsubmitBarcode', result.text)
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    stopRecord () {
      this.barCodeReader.reset()
    },
    onTextInputSubmit (e) {
      e.preventDefault()
      this.$emit('onsubmitBarcode', this.barcodeText)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video__scanner__container {
  display: flex;
  flex-direction: column;
}
.video__scanner__container button{
  width: 100px;
}
</style>
