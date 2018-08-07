



# Abstract Syntax Trees Made Concrete

- starring Tim Mcclure and bb-codeshift
- featuring Max Heiber and the Abstract Syntax Tease

> Full talk, including demo code in https://github.com/mheiber/ast-talk


## STARTING at 12:05!
## Abstract Snytax Trees Talk Part 1: Goals



- Know when Abstract Syntax Trees might help you solve problems
- Know what to Google
- Get a feel for working with ASTs


- > Part 2: Tim on a specific application of ASTs

## Uses of ASTs

AST useful for:
- programming language implementation
- language tools:
    - source code transformation
    - linters
- IDEs:
    - syntax highlighting
    - refactoring

## Abstract Syntax Tree

- tree representation of code
## Abstract Syntax **Tree**

Tree:
- The root node has zero parents
- All other nodes have exactly one parent

<!-- demo read xml: vs recipe.xml -->

# Abstract **Syntax** Tree

Syntax:
- means "language structure"
# **Abstract** Syntax Tree
- boring stuff has been removed

Non-Abstract Syntax Tree for `1 + 2`

(has stuff we don't care about)

- Expression
    - BinaryExpression
        - AdditionExpression
            - Left
                - Expression
                    - Literal: 1
            - Right
                - Expression
                    - Literal: 2

## Problem: what modules are imported?

```js
define(['@jscore', '@sys-ui'], (jsCore, ui) => {})
```

We want: `['@jscore', '@ui']`

<!-- demo: define.xml define-xml-code.js define-ast.json define-ast-code.js side-by-side.js -->
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

## Uses of ASTs

- Compiler

`compile('2*3 + 42')`

// => `ADDI R1 3 42; MULI R0 2 R1`


```javascript
for (const node of ast) {
    switch (node.type) {
       case BinaryExpression:
            emit(ops[node.op], emit(node.left), emit(node.right))
        ...
    }
}
```
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
            - Literal:  `corner.pizza.toppings[0]`

# What can ASTs be used for?

- Examples:
    - linter
    - compiler
    - JIT
    - Other stuff!

# Review

- What's an AST?
- What can it be used for?


# Where do ASTs come from?

- ___

<!-- see `define-ast-codejs` example -->

## Where do Parsers come from?

- use an existing one
    - JS Parsers:
        - acorn, babylon, esprima, typescript parser
- use a parser generator




- write by hand

## Where do Parsers come from?

- use an existing one


- use a parser generator
    - antlr
    - yacc
    - lemon
    - tons more
- write by hand
## Where do Parsers come from?

- use an existing one


- use a parser generator




- write by hand
    ```javascript
    const parseBinaryExpression = () => {
        expectBinaryExpressionLeft(nextToken())
        expectBinaryExpressionOperator(nextToken())
        expectBinaryExpressionRigth(nextToken())
    }
    ```

# Fun with ASTs: Project Ideas


- Type-safe SQL queries with strings <!-- demo sql-example.js -->
- Baschist: the Bash linter   <!-- bash-example.sh -->
- explainshell
    - explain 'git push --set-upstream origin $(git branch | cut -d" " -f2)'

## Abstract Snytax Trees Talk Part 1: Goals

- Know when Abstract Syntax Trees might help you solve problems
- Know what to Google
- Get a feel for working with ASTs


- > Part 2: Tim on code transformation with bb-codeshift
