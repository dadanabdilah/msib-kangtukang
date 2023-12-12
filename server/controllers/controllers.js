const { createUser, getUserByName } = require("../models/model");

const register = async (req, res) => {
  try {
    const newUser = req.body;

    const user = await createUser(newUser);
    res.json({ id: user, message: "Berhasil mendaftar" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mendaftar" });
  }
};

const login = async (req, res) => {
  try {
    const userName = req.params.nama;
    const user = await getUserByName(userName);
    res.json({ id: user, message: "Berhasil masuk" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal masuk" });
  }
};

module.exports = {
  register,
  login,
};
