import NavBar from "../components/NavBar";
import FooTer from "../components/FooTer";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../App.css";
import tukang from "../assets/img/tukang/dummy-tukang.jpg";

function CariTukang() {
  return (
    <>
      <NavBar />
      <section className="border" style={{padding: "80px 0"}}>
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <h2>Cari Tukang</h2>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={12}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Cari Tukang"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="btn-CariTukang px-5">Cari</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem", padding: "15px", backgroundColor: "#eef0e5", border: "none"}}>
                <Card.Img variant="top" src={tukang} />
                <Card.Body className="text-center">
                  <Card.Text>
                    <b>Nama :</b>{"Mustofa"}
                  </Card.Text>
                  <Card.Text>
                    <b>Profesi :</b>{" Tukang Cat Kayu"}
                  </Card.Text>
                  <Card.Text>
                    <b>Lokasi :</b>{"Tanjungpinang"}
                  </Card.Text>
                  <Card.Link href="#" className="btn-CariTukang mx-0 rounded py-2">
                    Hubungi
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <FooTer />
    </>
  );
}

export default CariTukang;
