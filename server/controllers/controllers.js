const { createUser, getUserByName, getUsers, getLogin } = require("../models/model");

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
    const userName = req.body;
    const user = await getLogin(userName);
    if(user == null) {
      res.status(200).json({ status : 'failed', data : '', error: "Gagal masuk" });
    } else {
      res.json({ status: 'success', data : user , message: "Berhasil masuk" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status : 'failed', data : '', error: "Gagal masuk" });
  }
};

module.exports = {
  register,
  login,
};
