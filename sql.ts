'use strict'
import * as parse from 'sqlite-parser'


const query = 'SELECT NAME, ADDRESS FROM PERSON'
console.log(JSON.stringify(parse(query), null, 2))
























/*

type PersonsTableT = {
    'name': string
    'age': number
    'address': string
}

const rows = queryDb(query)

if (rows.length) {
    const [max, ..._rest] = rows
    max.name // OK
    max.phoneNumber  // Error: key 'phoneNumber'
                     // does not exist on type
                     // SQLResult<'SELECT NAME, ADDRESS FROM PERSON'>
}
*/
