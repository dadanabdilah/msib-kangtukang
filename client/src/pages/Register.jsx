import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { registerRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
                <Form className="px-5" onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => handleChange(e)}
                      name="nama"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => handleChange(e)}
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group controlId="jenisAkun" className="mb-3">
                    <Form.Label>Jenis akun</Form.Label>
                    <Form.Select
                      value={values.jenisAkun}
                      onChange={(e) => handleChange(e)}
                      name="jenisAkun"
                    >
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
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <button type="submit" className="btn-CariTukang rounded">
                      Daftar
                    </button>
                    <a href="/login" className="btn-JadiMitra rounded">
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
      <ToastContainer />
    </>
  );
}
