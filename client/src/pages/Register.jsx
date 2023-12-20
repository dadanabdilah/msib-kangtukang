import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";

export default function Register() {
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
        navigate('/masuk');
      }else{
        setRegisterResponse(response.data);
      }
    } catch (error) {
      setRegisterResponse('error');
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
                <Form className="px-5" onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="formGroupNama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupNoHP">
                    <Form.Label>No HP</Form.Label>
                    <Form.Control type="text" value={no_hp} onChange={(e) => setNoHP(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formGridJenisAkun" className="mb-3">
                    <Form.Label>Jenis akun</Form.Label>
                    <Form.Select defaultValue="Pengguna" value={tipe} onChange={(e) => setTipe(e.target.value)}>
                      <option>Pilih</option>
                      <option>Pengguna</option>
                      <option>Mitra</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="formGroupPassword">
                    {registerResponse.status === 'success' && <p>{registerResponse.message}</p>}
                    {registerResponse.status === 'failed' && <p>{registerResponse.message}</p>}

                    <button type="submit" className="btn-CariTukang rounded">Daftar</button>
                    <a href="/masuk" className="btn-JadiMitra rounded">
                      Masuk
                    </a>
                  </Form.Group>
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
    </>
  );
}
