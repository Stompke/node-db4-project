
exports.seed = function(knex) {

      return knex('instructions').insert([
        {id: 1, step_number: 1, description: 'Get the ingredients', recipe_id: 1},
        {id: 2, step_number: 2, description: 'Cook the Turkey', recipe_id: 1},
        {id: 3, step_number: 3, description: 'Add the broth', recipe_id: 1},
        {id: 4, step_number: 4, description: 'Add spices, and enjoy!', recipe_id: 1},
        {id: 5, step_number: 1, description: 'Peel potatoes', recipe_id: 2},
        {id: 6, step_number: 2, description: 'boil potatoes and add garlic', recipe_id: 2},
        {id: 7, step_number: 3, description: 'add butter and milk', recipe_id: 2},
        {id: 8, step_number: 4, description: 'Add salt and pepper and ENJOY!', recipe_id: 2},
        {id: 9, step_number: 1, description: 'Shape hamburger into patties', recipe_id: 3},
        {id: 10, step_number: 2, description: 'Cook hamurgers on grill, NOT TOO MUCH!!', recipe_id: 3},
        {id: 11, step_number: 3, description: 'Place hamburger on bun, and EAT!! om nom nom...', recipe_id: 3},
      ]);
};
