// ts-check

/**
 * Return data object for chart js to render
 * @param {object} productData
 * @param {string} dataLabel
 */
export function getChartDataLabel (productData, dataLabel) {
  const labels = Object.keys(productData)
  const data = Object.values(productData)

  return {
    chartData: {
      labels,
      datasets: [{
        data,
        label: dataLabel,
        backgroundColor: '#c6e48b'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
}

export function getDefaultHeader () {
  return {
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
}
