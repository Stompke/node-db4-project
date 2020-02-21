const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({ error: "Could not retrieve recipes"});
    })
})

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(500).json({ error: "There was an error retreiving the shopping list" });
        })
    });

router.get('/:id/instructions', (req, res) => {

    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(err => {
            res.status(500).json({ error: "there was an error getting instructions for that recipe" });
        })
})

router.post('/', (req, res) => {
    Recipes.addRecipe(req.body)
        .then(recipe => {
            res.status(201).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ error: "could not add recipe" });
        })
})

router.post('/ingredients', (req, res) => {
    Recipes.addIngredient(req.body)
        .then(ingredient => {
            res.status(201).json(ingredient);
        })
        .catch(err => {
            res.status(500).json({ error: "could not add ingredient" });
        })
})

router.post('/:id/ingredients', (req, res) => {
    Recipes.addIngredientsToRecipe(req.params.id, req.body)
        .then(ingredient => {
            res.status(201).json(ingredient);
        })
        .catch(err => {
            res.status(500).json({ error: "There was an error adding ingredient to recipe" });
        })
})


module.exports = router;