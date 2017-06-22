
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments()
    table.string("title").notNullable().unique()
    table.text("body").notNullable().unique()
    table.string("author").notNullable().unique()
    table.string("image_url").notNullable().unique()
    table.integer("vote_count").defaultTo(0).notNullable()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
}
