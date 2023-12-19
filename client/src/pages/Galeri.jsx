import NavBar from "../components/NavBar";
import FooTer from "../components/FooTer";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../App.css";
import bangunan1 from "../assets/img/galeri/bangunan1.png";
import bangunan2 from "../assets/img/galeri/bangunan2.png";
import bangunan3 from "../assets/img/galeri/bangunan3.png";
import bangunan4 from "../assets/img/galeri/bangunan4.png";
import bangunan5 from "../assets/img/galeri/bangunan5.png";
import bangunan6 from "../assets/img/galeri/bangunan6.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Galeri() {
  return (
    <>
      <NavBar />
      <section className="galeri" style={{ marginTop: "100px" }}>
        <Container fluid className="border px-5 pt-4">
          <h2 className=" text-center title-galeri fw-semibold">
            GALERI TUKANG
          </h2>
          <Row className="pb-5 mx-1 justify-content-md-center">
            <Col md={3} className="my-3">
              <Card
                className="border-0 rounded-top-5 shadow"
                style={{ height: "290px" }}
              >
                <Card.Img
                  variant="top"
                  src={bangunan1}
                  className="text-center"
                  style={{ width: "100%", height: "220px" }}
                />
                <Card.Subtitle className="text-center mt-3 fw-semibold">
                  TUKANG CAT
                </Card.Subtitle>
                <a
                  href="#"
                  className="py-2 tombol-galeri w-25 text-center position-absolute top-100 start-50 translate-middle"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col md={3} className="my-3">
              <Card
                className="border-0 rounded-top-5 shadow"
                style={{ height: "290px" }}
              >
                <Card.Img
                  variant="top"
                  src={bangunan2}
                  className="text-center"
                  style={{ width: "100%", height: "220px" }}
                />
                <Card.Subtitle className="text-center mt-3 fw-semibold">
                  TUKANG LAS
                </Card.Subtitle>
                <a
                  href="#"
                  className="py-2 tombol-galeri w-25 text-center position-absolute top-100 start-50 translate-middle"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col md={3} className="my-3">
              <Card
                className="border-0 rounded-top-5 shadow"
                style={{ height: "290px" }}
              >
                <Card.Img
                  variant="top"
                  src={bangunan3}
                  className="text-center"
                  style={{ width: "100%", height: "220px" }}
                />
                <Card.Subtitle className="text-center mt-3 fw-semibold">
                  TUKANG SANITAIR
                </Card.Subtitle>
                <a
                  href="#"
                  className="py-2 tombol-galeri w-25 text-center position-absolute top-100 start-50 translate-middle"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col md={3} className="my-3">
              <Card
                className="border-0 rounded-top-5 shadow"
                style={{ height: "290px" }}
              >
                <Card.Img
                  variant="top"
                  src={bangunan4}
                  className="text-center"
                  style={{ width: "100%", height: "220px" }}
                />
                <Card.Subtitle className="text-center mt-3 fw-semibold">
                  TUKANG LISTRIK
                </Card.Subtitle>
                <a
                  href="#"
                  className="py-2 tombol-galeri w-25 text-center position-absolute top-100 start-50 translate-middle"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col md={3} className="my-3">
              <Card
                className="border-0 rounded-top-5 shadow"
                style={{ height: "290px" }}
              >
                <Card.Img
                  variant="top"
                  src={bangunan5}
                  className="text-center"
                  style={{ width: "100%", height: "220px" }}
                />
                <Card.Subtitle className="text-center mt-3 fw-semibold">
                  TUKANG BANGUNAN
                </Card.Subtitle>
                <a
                  href="#"
                  className="py-2 tombol-galeri w-25 text-center position-absolute top-100 start-50 translate-middle"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col md={3} className="my-3">
              <Card
                className="border-0 rounded-top-5 shadow"
                style={{ height: "290px" }}
              >
                <Card.Img
                  variant="top"
                  src={bangunan6}
                  className="text-center"
                  style={{ width: "100%", height: "220px" }}
                />
                <Card.Subtitle className="text-center mt-3 fw-semibold">
                  TUKANG ATAP
                </Card.Subtitle>
                <a
                  href="#"
                  className="py-2 tombol-galeri w-25 text-center position-absolute top-100 start-50 translate-middle"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <FooTer />
    </>
  );
}
