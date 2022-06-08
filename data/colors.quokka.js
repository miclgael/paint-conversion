// the output from convertToStrings.firefox.js
import citadel from './colors/colors.citadel'
import p3 from './colors/colors.p3'
import * as armypainter from './colors/colors.ap'
import vm from './colors/colors.vm'
import vg from './colors/colors.vg'

// Process array items in batches of 5
const createBatches = (colorGroup) => {
  let batches = []
  let N = 5;
    for (let i = 0; i < colorGroup.length; i += N) {
      batches.push([
        colorGroup[i], 
        colorGroup[i + N - 1],
        colorGroup[i + N - 2],
        colorGroup[i + N - 3],
        colorGroup[i + N - 4]
      ])
    }
  return batches
}

const createColorTable = (batch) => {

  let colors = []

  for (let j = 0; j < batches.length; j++) {

    for (let k = 0; k < batches[j].length; k++) {
      const e = batches[j][k].split(' - ')
        
      var o = {
        name: e[0],
        brand: e[1],
      }
  
      if (o.brand === 'Citadel') {
        o.type = e[2]
        o.hex = e[3]
      } else {
        o.hex = e[2]
        o.delta = e[3]
      }

      colors.push(o)
    }

  }
  return colors
}

const batches = createBatches(citadel)
const colorTable = createColorTable(batches)

export default colorTable
