## Uses of ASTs

- Linter

```javascript
ast.find({type: 'Identifier'})
.forEach(lintSnakeCase);

function lintSnakeCase(node) {
    if (isSnakeCase(node)) {
        logError(`lint error: snake_case: '${node.value} at ${node.lineNumber}`)
    }
}
```

