## Uses of ASTs

- Interpreter

`interpret('2*3 + 42')`

```javascript
for (const node of ast) {
    interpret(node)
}
// Will log '48'

let left = 0;
let op = () => throw Error('no operator')

function interpret(node) {
    switch (node.type) {
        case Operator:
            op = operators[node.value]
        case Left:
          left = node.value 
        case Right:
            return op(left, right)
    }

}
```



