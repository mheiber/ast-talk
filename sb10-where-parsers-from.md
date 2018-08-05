## Where do Parsers come from?

- use an existing one
    - JS Parsers:
        - acorn
        - babylon
        - esprima
        - flow parser
        - typescript parser
- use a parser generator
    - antlr
    - yacc
    - lemon
    - tons more
- write by hand
    ```javascript
    const parseBinaryExpression = () => {
        expectBinaryExpressionLeft(nextToken())
        expectBinaryExpressionOperator(nextToken())
        expectBinaryExpressionRigth(nextToken())
    }
    ```

