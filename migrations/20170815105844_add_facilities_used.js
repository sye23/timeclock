exports.up = function(knex, Promise) {
    return knex.schema.createTable('facilities_used', table => {
        table.increments('id').primary();
        table.integer('userId').unsigned().index().references('userId').inTable('users');
        table.integer('facilityId').unsigned().index().references('facilityId').inTable('facilities');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('facilities_used');
};