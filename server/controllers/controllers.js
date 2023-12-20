const { createUser, getUserByName } = require("../models/model");

const register = async (req, res) => {
  try {
    const user = req.body;
    const check = await getUserByName(user.nama, user.email);
    if (check) {
      if (check.nama === user.nama) {
        return res.json({ msg: "Nama sudah terdaftar", status: false });
      } else if (check.email === user.email) {
        return res.json({ msg: "Email sudah terdaftar", status: false });
      }
    }
    await createUser(user);
    res.json({ msg: "Berhasil mendaftar", status: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mendaftar" });
  }
};

const login = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const check = await getUserByName("", user.email);
    console.log(check);
    if (check) {
      if (check.email !== user.email) {
        res.json({ msg: "Email salah", status: false });
      } else if (check.password !== user.password) {
        res.json({ msg: "Password salah", status: false });
      }
    }
    res.json({ msg: "Berhasil masuk", status: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal masuk" });
  }
};

module.exports = {
  register,
  login,
};
