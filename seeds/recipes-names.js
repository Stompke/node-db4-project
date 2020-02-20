
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Turkey Soup'},
        {id: 2, name: 'Garlic Mashed Potatoes'},
        {id: 3, name: 'Hamburger'}
      ]);
    });
};
