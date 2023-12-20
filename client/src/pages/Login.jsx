import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
<<<<<<< HEAD
  const navigate = useNavigate();

  //useState
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    const { email, password } = values;
    if (email === "") {
      toast.error("Email wajib isi", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password terlalu pendek", toastOptions);
      return false;
    }
    return true;
  };

  // function submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (handleValidation()) {
        const { email, password } = values;
        const { data } = await axios.post(loginRoute, {
          email,
          password,
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
    }
  };
=======
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (response.data.status === 'success') {
        setLoginStatus(response.data.status);
        navigate('/'); // change '/dashboard' to your desired route
      }else{
        setLoginStatus(response.data.status);
      }
    } catch (error) {
      setLoginStatus('error');
    }
  };

>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
  return (
    <>
      <section
        className="login d-flex align-items-center container-fluid"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Container>
          <Row className="justify-content-md-center px-3">
            <Col
              md={6}
              style={{ backgroundColor: "white" }}
              className="rounded shadow"
            >
              <Row className="my-4">
                <Col md={12} className="text-center">
                  <h2>Masuk</h2>
                </Col>
              </Row>
<<<<<<< HEAD
              <Form className="px-5" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formGroupPassword">
                  <button type="submit" className="btn-CariTukang rounded">
                    Masuk
                  </button>
=======
              <Form className="px-5" onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                   <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formGroupPassword">
                  {loginStatus === 'success' && <p>Login berhasil!</p>}
                  {loginStatus === 'failed' && <p>Login gagal. Silakan coba lagi.</p>}
                
                  <button type="submit" className="btn-CariTukang rounded">Masuk</button>
>>>>>>> 1bd0420244dc228db061add496127eaa43458ffe
                  <a href="/register" className="btn-JadiMitra rounded">
                    Daftar
                  </a>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <footer className="footerLogin py-2">
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
      </section>
      <ToastContainer />
    </>
  );
}
