
const recipes = [...document.querySelectorAll('.recipe')].map(recipeEl => (
    {
        isVegan: recipeEl.dataset.isVegan !== undefined,
        title: recipeEl.querySelector('h3').textContent,
        ingredients:
            [...recipeEl.querySelectorAll('ul.ingredients li')]
                .map(el => el.textContent)
    }
))
