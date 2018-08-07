## Uses of ASTs

- Compiler

`compile('2*3 + 42')`

// => `ADDI R1 3 42; MULI R0 2 R1`


```javascript
for (const node of ast) {
    switch (node.type) {
       case BinaryExpression:
            // missing: register logic
            emit(ops[node.op], emit(node.left), emit(node.right))
        ...
    }
}
```
