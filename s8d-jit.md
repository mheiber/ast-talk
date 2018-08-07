
## ASTs used in JIT compilers

- JITed       : JavaScript, Java, Lua



```javascript
function V8 (sourceCode) {
    const ast = parse(sourceCode)
    for (const node of ast) {
        if (optimizer.has(node)) {
            run(optimizer.get(node)) 
        }
        else if (shouldOptimize(node)) {
            optimizer.compile(node)
            run(optimizer.get(node))
        }
        else {
            interpret(node)
        }
    }
}









const pepperoni = lodash.get(room, 'corner.pizza.toppings[0]')

- AST:
    - Assignment
        - Call
            - Callee
            - PropertyAccess
                - Identifier: lodash
                - Accessor
                    - Identifier: get
        - Arguments
            - Identifier: room
            - Literal:  'corner.pizza.toppings[0]'
```
