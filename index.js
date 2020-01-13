const _ = require('lodash')
const csv = require('csv-parser')
const fs = require('fs')

const template = _.template(fs.readFileSync('template.txt', 'utf8'))

fs.createReadStream('data.csv')
.pipe(csv())
.on('data', data => { 
  console.log(template(data))
})
.on('end', () => {
  console.log('Finished')
});
