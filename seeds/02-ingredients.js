
exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Turkey'},
        {id: 2, ingredient: 'Broth'},
        {id: 3, ingredient: 'Potatoes'},
        {id: 4, ingredient: 'Garlic'},
        {id: 5, ingredient: 'Hamburger'},
        {id: 6, ingredient: 'Hamburger Buns'}
      ]);
};
