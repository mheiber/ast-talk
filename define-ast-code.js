const j = require('jscodeshift')
const ast = j(
    `define(['@jscore', '@sys-ui'], (jsCore, ui) => {})`
)
 
const modules = ast.find(j.CallExpression, {
    callee: {
      name: 'define',
      type: 'Identifier'
    }
})
.find(j.ArrayExpression)
.find(j.Literal)
.paths().map(path => path.value.value)

console.log(modules)

// see side-by-side.md
