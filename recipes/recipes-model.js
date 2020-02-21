const db = require('../data/db-config');

module.exports = {
    find,
    getShoppingList
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