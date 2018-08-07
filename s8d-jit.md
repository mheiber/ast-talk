
## ASTs used in JIT compilers

- Compiled    : C++, OCaml
- Interpreted : Python
- JITed       : JavaScript, Java, Lua


### Just in Time Compilation:

- If code is expensive and optimizable:
    - compile it to machine code
- Otherwise, interpret the code 


### Why this matters


```javascript
const sausage = lodash.get(room, 'corner.pizza.toppings[0]')
```

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

