'use strict'
import * as parse from 'sqlite-parser'


const query = 'SELECT NAME, ADDRESS FROM PERSON'
console.log(JSON.stringify(parse(query), null, 2))


/*
CREATE TABLE PERSONS (
    NAME VARCHAR(256),
    ADDRESS VARCHAR(256),
    AGE IMAGINARY
)
*/

/*

const rows = queryDb(query)

if (rows.length) {
    const [max, ..._rest] = rows
    max.name // OK
    max.phoneNumber  // Error: key 'phoneNumber'
                     // does not exist on type
                     // SQLResult<'SELECT NAME, ADDRESS FROM PERSON'>
}
*/
