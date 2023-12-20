const { createUser, getUserByName, getUsers, getLogin } = require("../models/model");

const register = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const newUser = req.body;

    const user = await createUser(newUser);
    if(user == null) {
      res.status(200).json({ status : 'failed', data : '', error: "Gagal melakukan pendaftaran" });
    } else {
      res.json({ status: 'success', data : user , message: "Berhasil melakukan pendaftaran" });
    }
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
  } catch (error) {
    res.status(200).json({ status : 'failed', data : '', message : "Gagal melakukan pendaftaran. Silakan hubungi admnistrator.", error: error});
  }
};

const login = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const userName = req.body;
    const user = await getLogin(userName);
    if(user == null) {
      res.status(200).json({ status : 'failed', data : '', error: "Gagal masuk" });
    } else {
      res.json({ status: 'success', data : user , message: "Berhasil masuk" });
    }
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
  } catch (error) {
    console.error(error);
    res.status(200).json({ status : 'failed', data : '', message: "Gagal masuk. Silakan hubungi admnistrator.", error: error });
  }
};

module.exports = {
  register,
  login,
};
