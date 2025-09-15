// script.js
const recipes = [
    {
        title: "Chocolate Cake",
        category: "dessert",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
        ingredients: ["Flour", "Sugar", "Cocoa", "Eggs"],
        instructions: "Mix ingredients and bake for 30 minutes..."
    }
];

function displayRecipes() {
    const grid = document.querySelector('.recipe-grid');
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.ingredients.join(', ')}</p>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayRecipes);
