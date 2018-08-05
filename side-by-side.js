

// reading the DOM
Array.from(document.querySelector('CallExpression Callee[type="Identifier"][name="define"]')
    .querySelector('ArrayExpression')
    .querySelectorAll('Literal')
).map(el => el.getAttribute('value'))
// result: [ "@jscore", "@ui" ]

// reading the AST with jscodeshift
ast.find(j.CallExpression, {
    callee: {
      name: 'define',
      type: 'Identifier'
    }
})
.find(j.ArrayExpression)
.find(j.Literal)
.paths().map(path => path.value.value)
// result: [ "@jscore", "@ui" ]
