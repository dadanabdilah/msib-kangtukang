const { createUser, getUserByName, getUsers, getLogin } = require("../models/model");

const register = async (req, res) => {
  try {
    const newUser = req.body;

    const user = await createUser(newUser);
    if(user == null) {
      res.status(200).json({ status : 'failed', data : '', error: "Gagal melakukan pendaftaran" });
    } else {
      res.json({ status: 'success', data : user , message: "Berhasil melakukan pendaftaran" });
    }
  } catch (error) {
    res.status(200).json({ status : 'failed', data : '', message : "Gagal melakukan pendaftaran. Silakan hubungi admnistrator.", error: error});
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
    res.status(200).json({ status : 'failed', data : '', message: "Gagal masuk. Silakan hubungi admnistrator.", error: error });
  }
};

module.exports = {
  register,
  login,
};
