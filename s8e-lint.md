## Uses of ASTs

- Linter

```javascript
ast.find({type: 'Identifier'})
    .forEach(node => {
        if (isSnakeCase(node.value)) {
            logError(`lint error: snake_case: '${node.value} at ${node.lineNumber}`)
        }
    })
```

