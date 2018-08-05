
---

## Uses of ASTs (repeat)

AST useful for:
- programming language implementation
    - compilers/transpilers
    - Just-in-time compilers
    - interpreters
- Deserializing
- language tools:
    - source code transformation
    - linters
- IDEs:
    - go to definition
    - syntax checking
    - refactoring


## Abstract Syntax Tree

- tree representation of code


## Abstract Syntax **Tree**

Tree:
- The root has zero parents
- Every node except the root has exactly one parent


Tree problem

Turn this div and list markup:

<div class="recipe" data-is-vegan>
    <h3>Tofurkey</h3>
    <ul class="ingredients">
        <li>tofu</li>
        <li>turkey flavor</li>
    </ul>
</div>

Into this table-based markup:

<table>
    <tr><th>title</th><th>is vegan</th><th>ingredients</th></tr>
    <tr><td>Tofurkey</td><td>true</td><td>tofu, turkey flavor</td></tr>
</table>"

Tree Problem

Turn this div and list markup:

```html
<div class="recipe" data-is-vegan>
    <h3>Tofurkey</h3>
    <ul class="ingredients">
        <li>tofu</li>
        <li>turkey flavor</li>
    </ul>
</div>
```

Into this table-based markup:
```html
<table>
    <tr><th>title</th><th>is vegan</th><th>ingredients</th></tr>
    <tr><td>Tofurkey</td><td>true</td><td>tofu, turkey flavor</td></tr>
</table>"
```

----

```html
<div class="recipe" data-is-vegan>
    <h3>Tofurkey</h3>
    <ul class="ingredients">
        <li>tofu</li>
        <li>turkey flavor</li>
    </ul>
</div>
```

```js
const recipes = [...document.querySelectorAll('.recipe')].map(recipeEl => (
    {
        isVegan: recipeEl.dataset.isVegan !== undefined,
        title: recipeEl.querySelector('h3').textContent,
        ingredients:
            [...recipeEl.querySelectorAll('ul.ingredients li')]
                .map(el => el.textContent)
    }
))
```

----

```html
<div class="recipe" data-is-vegan>
    <h3>Tofurkey</h3>
    <ul class="ingredients">
        <li>tofu</li>
        <li>turkey flavor</li>
    </ul>
</div>
```


```json
{
    "recipes": [
        {
            "isVegan": true,
            "title": "Tofurkey"
            "ingredients: ["tofu", "turkey flavor"]
        }
    ]
}
```

-----
```json
{
    "recipes": [
        {
            "isVegan": true,
            "title": "Tofurkey"
            "ingredients: ["tofu", "turkey flavor"]
        }
    ]
}
```

```html
<table>
    <tr><th>title</th><th>is vegan</th><th>ingredients</th></tr>
    <tr><td>Tofurkey</td><td>true</td><td>tofu, turkey flavor</td></tr>
</table>"
```

```js
const transformedHtml = 
    '<table>\n    <tr><th>title</th><th>is vegan</th><th>ingredients</th></tr>\n'
    + recipes.map(recipe =>
        `    <tr><td>${recipe.title}</td><td>${recipe.isVegan}</td><td>${recipe.ingredients.join(', ')}</td></tr>\n`
    )
    + '</table>'
```

-----

Tree problem

Turn this div and list markup:

```html
<div class="recipe" data-is-vegan>
    <h3>Tofurkey</h3>
    <ul class="ingredients">
        <li>tofu</li>
        <li>turkey flavor</li>
    </ul>
</div>
```

Into this table-based markup:
```html
<table>
    <tr><th>title</th><th>is vegan</th><th>ingredients</th></tr>
    <tr><td>Tofurkey</td><td>true</td><td>tofu, turkey flavor</td></tr>
</table>"
```

Abstract **Syntax** Tree

Syntax:
- means "language structure"


**Abstract** Syntax Tree
- boring stuff has been removed

Non-Abstract Syntax Tree (extra stuff we don't care about):
- Expression
    - BinaryExpression
        - AdditionExpression
            - left: 3
            - right: 4

--
## Problem: what modules are imported?

```js
define(['@jscore', '@sys-ui'], (jsCore, ui) => {})
```

We want: `['@jscore', '@ui']`

```xml
<CallExpression>
    <Callee type="Identifier" name="define" />
    <Arguments>
        <ArrayExpression>
            <Literal value="@jscore" />
            <Literal value="@ui" />
        </ArrayExpression>
        <ArrowExpression />
    </Arguments>
</CallExpression>
```

## Problem: what modules are imported?

If this were DOM:

```xml
<CallExpression>
    <Callee type="Identifier" name="define" />
    <Arguments>
        <ArrayExpression>
            <Literal value="@jscore" />
            <Literal value="@ui" />
        </ArrayExpression>
        <ArrowExpression />
    </Arguments>
</CallExpression>
```

AST data structure is also a tree:

![](ast-for-define.jpg)

## Problem: what modules are imported?

```js
define(['@jscore', '@sys-ui'], (jsCore, ui) => {})
```

If this were DOM, we would do:
```js
Array.from(document.querySelector('CallExpression Callee[type="Identifier"][name="define"]')
    .querySelector('ArrayExpression')
    .querySelectorAll('Literal')
).map(el => el.getAttribute('value'))
// result: ['@jscore', '@ui']
```

Working with ASTs is similar:
```js
ast.find(j.CallExpression, { callee: { name: 'define', type: 'Identifier' } })
    .find(j.ArrayExpression)
    .find(j.Literal)
    .paths().map(path => path.value.value)
// result: ['@jscore', '@ui']

```


## AST

- tree representation of code
- that's it


## Use ASTs for

- transform code structure
- generate different code
- validate the code structure

<img src="ast.png" height="400">

---
## Uses of ASTs

AST useful for:
- programming language implementation
    - compilers/transpilers
    - Just-in-time compilers
    - interpreters
- Deserializing
- language tools:
    - source code transformation
    - linters
- IDEs:
    - go to definition
    - syntax checking
    - refactoring

---
## Background: Compilers

traditional compiler's job: source code to target code


---


## Compilers

traditional compiler's job: source code to target code

sourceCode --> sourceAst --> IR --> targetCode

```js
const compile = source => {
    const ast = parse(source)
    const ir = transform(ast)
    return ir.toCode()
}
```

`parse('2*3 + 42')`

- AdditionExpression
    - Left
        - Literal: 2
    - Right
    - MultiplicationExpression
        - Left
            - Literal: 3
        - Right:
            - Literal: 42


`compile('2*3 + 42')`

// `ADDI R1 3 42; MULI R0 2 R1`

## Side Note: compiler, JIT, interpreter

Compiled    : C, C++, Go, Haskell, OCaml, Rust

Interpreted : Bash, Python, Ruby, PHP

JITed       : JavaScript, Java, Lua, Python (PyPy)


## Where do ASTs come from?

- parsers make ASTs

```js
const ast = parse(sourceCode)`
```


---
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

## Use ASTs for

- transform code structure
- generate different code
- validate the code structure


---
## Uses of ASTs

AST useful for:
- programming language implementation
    - compilers/transpilers
    - Just-in-time compilers
    - interpreters
- Deserializing
- language tools:
    - source code transformation
    - linters
- IDEs:
    - go to definition
    - syntax checking
    - refactoring
