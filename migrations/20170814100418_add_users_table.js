exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('password');
        table.integer('facilityId');
        table.boolean('isAdmin');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};