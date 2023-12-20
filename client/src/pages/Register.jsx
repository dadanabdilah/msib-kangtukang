import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { registerRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
<<<<<<< HEAD
  const navigate = useNavigate();

  //useState
  const [values, setValues] = useState({
    nama: "",
    email: "",
    jenisAkun: "pengguna",
    password: "",
    alamat: "",
  });

  // function changes
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.toLowerCase() });
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { nama, email, jenisAkun, password, alamat } = values;
    if (nama.length < 4) {
      toast.error("Nama terlau pendek", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("jenis is required", toastOptions);
      return false;
    } else if (jenisAkun === "") {
      toast.error("jenis is required", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password terlalu pendek", toastOptions);
      return false;
    } else if (alamat === "") {
      toast.error("Alamat is required", toastOptions);
      return false;
    }
    return true;
  };

  // function submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (handleValidation()) {
        const { nama, email, jenisAkun, password, alamat } = values;
        const { data } = await axios.post(registerRoute, {
          nama,
          email,
          jenisAkun,
          password,
          alamat,
        });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem("chat-app-user", JSON.stringify(data.user));
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
=======
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipe, setTipe] = useState('');
  const [no_hp, setNoHP] = useState('');
  
  const [registerResponse, setRegisterResponse] = useState('');
  const navigate = useNavigate();
  
  const handleRegister  = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { nama, email, no_hp, password, tipe});
      if (response.data.status === 'success') {
        setRegisterResponse(response.data);
        navigate('/login');
      }else{
        setRegisterResponse(response.data);
      }
    } catch (error) {
      setRegisterResponse('error');
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
    }
  };

  return (
    <>
      <Row className="login m-0">
        <Col md={12} className="my-5">
          <Container className="" fluid>
            <Row className="justify-content-md-center px-3">
              <Col
                md={6}
                style={{ backgroundColor: "white" }}
                className="rounded shadow"
              >
                <Row className="my-4">
                  <Col md={12} className="text-center">
                    <h2>Daftar</h2>
                  </Col>
                </Row>
<<<<<<< HEAD
                <Form className="px-5" onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => handleChange(e)}
                      name="nama"
                    />
=======
                <Form className="px-5" onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="formGroupNama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupNoHP">
                    <Form.Label>No HP</Form.Label>
                    <Form.Control type="text" value={no_hp} onChange={(e) => setNoHP(e.target.value)} />
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
<<<<<<< HEAD
                    <Form.Control
                      type="email"
                      onChange={(e) => handleChange(e)}
                      name="email"
                    />
=======
                    <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
                  </Form.Group>
                  <Form.Group controlId="jenisAkun" className="mb-3">
                    <Form.Label>Jenis akun</Form.Label>
<<<<<<< HEAD
                    <Form.Select
                      value={values.jenisAkun}
                      onChange={(e) => handleChange(e)}
                      name="jenisAkun"
                    >
=======
                    <Form.Select defaultValue="Pengguna" value={tipe} onChange={(e) => setTipe(e.target.value)}>
                      <option>Pilih</option>
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
                      <option>Pengguna</option>
                      <option>Mitra</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="password"
                    onChange={(e) => handleChange(e)}
                  >
                    <Form.Label>Password</Form.Label>
<<<<<<< HEAD
                    <Form.Control type="password" name="password" />
                  </Form.Group>
                  <Form.Group
                    className="mb-5"
                    controlId="alamat"
                    onChange={(e) => handleChange(e)}
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="1234 Main St"
                      type="text"
                      name="alamat"
                    />
=======
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="formGroupPassword">
                    {registerResponse.status === 'success' && <p>{registerResponse.message}</p>}
                    {registerResponse.status === 'failed' && <p>{registerResponse.message}</p>}

                    <button type="submit" className="btn-CariTukang rounded">Daftar</button>
                    <a href="/masuk" className="btn-JadiMitra rounded">
                      Masuk
                    </a>
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
                  </Form.Group>
                  <button type="submit" className="btn-CariTukang rounded">
                    Masuk
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <footer className="py-2" style={{ backgroundColor: "#eccb18" }}>
        <Container>
          <div className="text-center" style={{ fontSize: "13px" }}>
            <small>
              <b>&copy;KangTukang All Right Reserved</b>
            </small>{" "}
            <br />
            <small>
              <b>Developed by Group 11 Afternoon C</b>
            </small>
          </div>
        </Container>
      </footer>
      <ToastContainer />
    </>
  );
}
