<template>
  <div class="search">
    <div class="video__scanner__container">
      <video id="video" width="300" height="200" ref="scanner"></video>
      <button v-on:click="start">Start recording</button>
      <button v-on:click="stopRecord">Stop record</button>
    </div>
    <div>
      <form v-on:submit="onSubmitBarcode">
        <label>
          Barcode number:
          <input type="number" v-model="barcodeText" />
        </label>
        <button class="Search__btn" type="submit">Search</button>
      </form>
      <form v-on:submit="onSubmitProductName">
        <label>
          Product name:
          <input type="text" v-model="productName" required/>
        </label>
        <button class="Search__btn" type="submit">Search</button>
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
      barcodeText: '',
      productName: ''
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
            this.barcodeText = result.text
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
    onSubmitBarcode (e) {
      e.preventDefault()
      if (this.barcodeText) {
        this.$emit('onsubmitBarcode', this.barcodeText)
      }
    },
    onSubmitProductName (e) {
      e.preventDefault()
      this.$emit('submitProductName', this.productName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 320px) {
  .search {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media (min-width: 641px) {
  .search {
    display: grid;
    grid-template-columns: 0.5fr auto;
  }
}

.video__scanner__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.video__scanner__container button {
  width: 100px;
}

video {
  border: 1px solid;
  margin-bottom: 8px;
}

input {
  border: 0.5px solid;
}

.Search__btn {
  margin: 8px;
}
</style>
