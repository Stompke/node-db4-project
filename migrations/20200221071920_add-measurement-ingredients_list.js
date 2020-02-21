
exports.up = function(knex) {
    return knex.schema
        .table('ingredients_list', tbl => {
            tbl.string('measurement', 128)
        }
        )
};

exports.down = function(knex) {
    return knex.schema
        .table('ingredients_list', tbl => {
            tbl.dropColumn('measurement');
        })
};
