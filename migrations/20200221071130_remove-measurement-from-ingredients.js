
exports.up = function(knex) {
  return knex.schema
    .table('ingredients', tbl => {
        tbl.dropColumn('measurement');
    })
};

exports.down = function(knex) {
    return knex.schema
        .table('ingredients', tbl => {
            tbl.string('measurement', 128)
                .notNullable();
        }
        )
  
};
