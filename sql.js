'use strict'
const parse = require('sqlite-parser')

console.log(JSON.stringify(parse('select name, soc from person'), null, 2))
