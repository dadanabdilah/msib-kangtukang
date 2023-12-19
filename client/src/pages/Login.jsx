import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";

export default function Login() {
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
              <Form className="px-5">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formGroupPassword">
                  <a href="/" className="btn-CariTukang rounded">
                    Masuk
                  </a>
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
