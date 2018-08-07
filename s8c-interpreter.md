## Uses of ASTs

- Interpreter

`interpret('2*3 + 42')`

```javascript
let left = 0;
let operation;

for (const node of ast) {
    switch (node.type) {
        case Operator:
            operation = operators[node.value]
        case Left:
          left = node.value 
        case Right:
            left = operation(left, right)
    }
}
```



