require("dotenv").config();
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

async function getUsers() {
  const [rows, fields] = await connection.execute("SELECT * FROM pengguna");
  return rows[0];
}

async function getUserByName(nama) {
  const [rows, fields] = await connection.execute(
    "SELECT * FROM pengguna WHERE nama = ?",
    [nama]
  );
  return rows[0];
}

async function createUser(user) {
  const [result] = await connection.execute(
    "INSERT INTO pengguna (nama, email, no_hp, password, tipe) VALUES (?, ?, ?, ?, ?)",
    [user.nama, user.email, user.no_hp, user.password, user.tipe]
  );
  return result.insertId;
}

async function updateUser(id, user) {
  const [result] = await connection.execute(
    "UPDATE users SET nama = ?, email = ?, no_hp = ? WHERE id = ?",
    [user.name, user.email, user.phone, id]
  );
  return result.affectedRows > 0;
}

async function deleteUser(id) {
  const [result] = await connection.execute("DELETE FROM users WHERE id = ?", [
    id,
  ]);
  return result.affectedRows > 0;
}

module.exports = {
  getUsers,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
};
