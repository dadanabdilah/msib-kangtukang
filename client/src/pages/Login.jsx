import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";

export default function Login() {
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

  return (
    <>
      <section className="login d-flex align-items-center container-fluid" style={{width: "100vw", height: "100vh"}}>
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
    </>
  );
}
