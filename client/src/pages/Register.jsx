import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";

export default function Register() {
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
                <Form className="px-5">
                  <Form.Group className="mb-3" controlId="formGroupNama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controlId="formGridJenisAkun" className="mb-3">
                    <Form.Label>Jenis akun</Form.Label>
                    <Form.Select defaultValue="Pengguna">
                      <option>Pengguna</option>
                      <option>Mitra</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" type="text" />
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="formGroupPassword">
                    <a href="/login" className="btn-CariTukang rounded">
                      Masuk
                    </a>
                    <a href="#" className="btn-JadiMitra rounded">
                      Daftar
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
