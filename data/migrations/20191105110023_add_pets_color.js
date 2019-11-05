exports.up = function(knex) {
  return knex.schema.table('pets', table => {
    table.string('color', 64);
  });
};

exports.down = function(knex) {
  return knex.schema.table('pets', table => {
    table.dropColumn('color');
  });
};
