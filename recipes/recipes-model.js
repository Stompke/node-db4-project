const db = require('../data/db-config');

module.exports = {
    find,
    getShoppingList,
    getInstructions,
    addRecipe
}

function find() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients_list as l')
    .join("ingredients as i", "l.ingredient_id", "i.id")
    .select("i.ingredient","l.quantity", "i.measurement")
    .where({ recipe_id: id })
}

function getInstructions(recipe_id) {
    console.log(recipe_id)
    return db('recipes as r')
        .innerJoin('instructions as i','r.id','i.recipe_id')
        .select('r.name','i.step_number','i.description')
        .where({ recipe_id })
        .orderBy('i.step_number')
}

function addRecipe(recipe){
    return db('recipes')
        .insert(recipe)
}