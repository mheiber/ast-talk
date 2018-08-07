'use strict'
import * as parse from 'sqlite-parser'
const query = 'SELECT NAME, ADDRESS FROM PERSON'
console.log(JSON.stringify(parse(query), null, 2))


/*
const rows = queryDb(query)

const person = doQuery(rows)[0]
person.name // OK
person.phoneNumber  // Error: key 'phoneNumber'
                 // does not exist on type
                 // SQLResult<'SELECT NAME, ADDRESS FROM PERSON'>
*/
