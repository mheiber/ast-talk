# Talk: ASTs Made Concrete

- The concatenation of all the slides is in slides.md, which can be more convenient to read
- Files for demos are the .js, .ts, .xml, .json, .sh files. To make the code runnable, `npm install` first
- The `s*.md` files have individual slides
- The slides reference their corresponding demo files in html comments like this: `<!-- see recipes.xml -->`


## Install

To make the code in the .js files runnable, `npm install` first

## Build

To concatenate all the slides so they are easier to read:

```bash
cat s*.md > slides.md && git add slides.md
```

