
exports.up = function(knex) {
    return knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient', 128)
                .notNullable();
            tbl.string('measurement', 128)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients');
};
