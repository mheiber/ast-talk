
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

(image here with boring stuff)
(image here boring stuff removed)


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

---
## Background: Compilers

traditional compiler's job: source code to target code

<!-- 
similar to:
- interpreters
- just-in-time compilers

same as:
- transpiler
-->


---
## Side Note: compiler, JIT, interpreter

Compiled    : C, C++, Haskell, OCaml

Interpreted : Python (CPython)

JITed       : JavaScript, Java, Python (PyPy)

<!-- if there are questions about this, we can talk about it at the end -->


---
## Background: Compilers

compiler's job: source code to target code


```js
const compile = (source) => {
    // implementation here

    return targetCode
}
```


## Compilers

sourceCode --> sourceAst --> IR --> targetCode

```js
const compile = source => {
    const ast = parse(source)
    const ir = transform(ast)
    // TODO: error-reporting
    return ir.toCode()
}
```

<!--

ir: can be an AST. So in the case of TS compiler, all it has to do for the most part is get rid of the nodes in its AST that are for type annotations, then keep the rest. So the transform step is a somewhat trivial AST to AST transformation.

in the case of GCC and LLVM, they have several layers of intermediate representation, and theirs are not really tree-shaped.

-->

## sourceCode --> sourceAst --> targetCode

source: `2*3 + 42`

tokens: `| 2 | * | 3 | + | 42 | `

ast: 

<img src="tree-mult-high.jpg" height="200px"></img>

target: `ADDI R1 3 42; MULI R0 2 R1`

<!-- note: grammar for this language gives mult lower precedence than addition  

then come back here and ask about how one might write code to generate the target code from the sample code

If someone doesn't ask about the "wrong" instructions generated, brint it up.
: can discuss: see how the AST is an intermediate representation of code, and it has information useful for code generation. It makes sense that the AST would incode information about operator precedence. Whether + is higher or lower in the tree than *. Go into that a bit more, also relates to what it means to say the AST is "abstract"
-->

---
## ASTs and operator precedence

AST for Multiplication has low precedence:

<img src="tree-mult-high.jpg" height="200px"></img> `ADDI R1 3 42; MULI R0 2 R1`

AST for Multiplication has high precedence:

<img src="tree-mult-low.jpg" height="200px"></img>
`MULI R1 2 3; MULI R0 42 R1`

---

## Where do ASTs come from?

- parsers make ASTs

<!-- typically by "parser" people mean a thing that tokenizes and then generates an AST from the tokens-->

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


---
---
## Parser Generator



---
## Antlr demo

- antlr grammar for expressions
- **non-**abstract syntax tree example

<!--

- antlr website
 generates parsers in Java, C#, C++,[2] JavaScript, Python2, Python3, Swift, and Go.
 can get slightly better perf by hand-writing, so most compilers out there are 

-->
<!-- fix the operator precedence in simple example antlr 2 * 3 + 42 
-->

<!-- show the non-abstract syntax tree

for the parser to be efficient, you ideally want it to be able to know, given the characters I've seen before and what character I'm looking at right now, what is the next AST node to create? So internally, Antlr makes a parser that acts more like what is shown in this grammar.
--> 

---
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
