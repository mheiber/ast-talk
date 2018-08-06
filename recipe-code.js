const jsdom = require('jsdom'); const { JSDOM } = jsdom; const { readFileSync } = require('fs');
const { document } = new JSDOM(readFileSync('./recipe-source.xml')).window;

const recipes = [...document.querySelectorAll('.recipe')].map(recipeEl => (
    {
        isVegan: recipeEl.dataset.isVegan !== undefined,
        title: recipeEl.querySelector('h3').textContent,
        ingredients:
            [...recipeEl.querySelectorAll('ul.ingredients li')]
                .map(el => el.textContent)
    }
))


console.log(JSON.stringify(recipes, null, 2))


