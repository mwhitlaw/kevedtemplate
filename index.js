const _ = require('lodash')
const csv = require('csv-parser')
const fs = require('fs')
const template = _.template(fs.readFileSync('template.txt', 'utf8'))

const forEachMergedData = (mergedData) => {
  // here's where process each merged data
  console.log(mergedData)
}

fs.createReadStream('data.csv')
.pipe(csv())
.on('data', data => { 
  forEachMergedData(template(data))
})
.on('end', () => {
  console.log('Finished')
});
