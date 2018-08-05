## Where do Parsers come from?

- use an existing one
- use a parser generator
- write by hand









































---
## Where do Parsers come from?

- use an existing one
    - JS Parsers:
        - acorn
        - babylon
        - esprima
        - flow parser
        - typescript parser
- use a parser generator
- write by hand

---
## Where do Parsers come from?

- A parser generator is a function: (grammar) => parser
    - examples:
        - antlr
        - yacc
        - lemon
        - tons more
    - Pro: easy
    - Con: slower than writing parser by hand

---
## Where do Parsers come from?

- use an existing one
- use a parser generator
- write by hand

```js
const parseBinaryExpression = () => {
    expectBinaryExpressionLeft(nextToken())
    expectBinaryExpressionOperator(nextToken())
    expectBinaryExpressionRigth(nextToken())
}
```
