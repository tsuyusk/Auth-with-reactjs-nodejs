import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username", 30).notNullable().unique();
    table.string("password", 60).notNullable();
    table.string("token").notNullable().unique();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
