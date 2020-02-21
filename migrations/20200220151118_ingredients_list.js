
exports.up = function(knex) {
  return knex.schema
  .createTable('ingredients_list', tbl => {
      tbl.primary(['recipe_id','ingredient_id']);

      //foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

      //foreign key
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.integer('quantity')
            .notNullable()


  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients_list');
};
