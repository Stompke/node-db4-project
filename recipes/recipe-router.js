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
    
module.exports = router;