const path = require("path");

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite")
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations")
  },
  pool: {
    min: 0,
    max: 100
  },
  useNullAsDefault: true
}
