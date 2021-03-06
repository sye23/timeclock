exports.up = function(knex, Promise) {
    return knex.schema.createTable('times', table => {
        table.increments('id').primary();
        table.integer('startTime');
        table.integer('endTime');
        table.integer('userId');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('times');
};