
exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Turkey', measurement: 'lbs'},
        {id: 2, ingredient: 'Broth', measurement: 'cups'},
        {id: 3, ingredient: 'Potatoes', measurement: 'lbs'},
        {id: 4, ingredient: 'Garlic', measurement: 'tbs'},
        {id: 5, ingredient: 'Hamburger', measurement: 'lbs'},
        {id: 6, ingredient: 'Hamburger Buns', measurement: 'pieces'}
      ]);
};
