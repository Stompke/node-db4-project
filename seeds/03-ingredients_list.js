
exports.seed = function(knex, promise) {

      return knex('ingredients_list').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 3, measurement: "lbs"},
        {recipe_id: 1, ingredient_id: 2, quantity: 4, measurement: "cups"},
        {recipe_id: 2, ingredient_id: 3, quantity: 10, measurement: "lbs"},
        {recipe_id: 2, ingredient_id: 4, quantity: 6, measurement: "tbsp"},
        {recipe_id: 3, ingredient_id: 5, quantity: 5, measurement: "lbs"},
        {recipe_id: 3, ingredient_id: 6, quantity: 12, measurement: ""},
      ]);
};
