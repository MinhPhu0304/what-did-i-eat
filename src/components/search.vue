<template>
  <div>
    <video
      id="video"
      width="300"
      height="200"
      style="border: 1px solid gray"
      ref="scanner">
    </video>
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
      this.barCodeReader.decodeFromVideoDevice(undefined, this.$refs.scanner, (result, err) => {
        if (result) {
          this.$emit('onsubmitBarcode', result.text)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
