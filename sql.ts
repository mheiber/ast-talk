'use strict'
import * as parse from 'sqlite-parser'
const query = 'SELECT NAME, ADDRESS FROM PERSON'
console.log(parse(query).statement[0].result.map(r => r.name))

/*
const rows = queryDb(query)

const resultRow = doQuery(rows)[0]
resultRow.name // OK
resultRow.phoneNumber // Error: key 'phoneNumber'
                      // does not exist on type
                      // SQLResult<'SELECT NAME, ADDRESS FROM PERSON'>
*/
