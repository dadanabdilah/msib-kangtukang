import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
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
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
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
