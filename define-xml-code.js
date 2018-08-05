const jsdom = require('jsdom'); const { JSDOM } = jsdom; const { readFileSync } = require('fs');
const { document } = new JSDOM(readFileSync('./define.xml')).window;

const modules = Array.from(document.querySelector('CallExpression Callee[type="Identifier"][name="define"]')
    .querySelector('ArrayExpression')
    .querySelectorAll('Literal')
).map(el => el.getAttribute('value'))

console.log(JSON.stringify(modules, null, 2))


// see side-by-side.js
