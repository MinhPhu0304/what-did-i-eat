// ts-check
import Label from './nutritionsName.json'

export function getChartDataLabel (nutritionValue) {
  const filteredOutEnergy = Object.keys(nutritionValue).reduce((acc, nutrition) => {
    if (nutrition !== 'ENERC_KCAL' && nutritionValue[nutrition] !== 0) {
      return {
        ...acc,
        [nutrition]: nutritionValue[nutrition]
      }
    }
    return acc
  }, {})
  const nutritionConverted = Object.keys(filteredOutEnergy).reduce((acc, nutrition) => {
    if (Label[nutrition].unit !== 'g') {
      const convertedValue = convertToGrams(Label[nutrition].unit, filteredOutEnergy[nutrition])
      return {
        ...acc,
        [nutrition]: convertedValue
      }
    }
    return {
      ...acc,
      [nutrition]: filteredOutEnergy[nutrition]
    }
  }, {})
  const labels = Object.keys(filteredOutEnergy)
  const labelName = labels.map(label => Label[label].name)
  const data = Object.values(nutritionConverted)
  const backgroundColor = Object.keys(nutritionConverted).map((key) => Label[key].color)
  return {
    chartdata: {
      labels: labelName,
      datasets: [
        {
          label: 'Value',
          data,
          backgroundColor
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
}

/**
 * @param {"mg"|"æg"} unit
 * @param {number} value
 */
function convertToGrams (unit, value) {
  if (unit === 'mg') {
    return value / 1000
  }
  return value / 1000000
}

export function getDefaultHeader () {
  return {
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
}
