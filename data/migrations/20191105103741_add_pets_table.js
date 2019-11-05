// the changes to make
exports.up = function(knex) {
  return knex.schema.createTable('pets', function(table) {
    /**
     * Pet
     * id
     * name
     * species
     * breed
     * food
     * weight
     * weightUnit
     */

    table.increments(); // adds a primary key, called 'id' as an auto-increment integer, not null and unique
    table.string('name', 128).notNullable();
    table.string('species', 128).notNullable();
    table.string('breed', 128);
    table.string('food', 255);
    table.float('weight');
    table.string('weightUnit', 64);
    table.timestamps(true, true);
  });
};

// how to undo those changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pets');
};
