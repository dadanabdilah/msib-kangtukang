import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import iconTiktok from "../assets/img/icon-tiktok.png";
import iconYt from "../assets/img/icon-yt.png";
import iconFb from "../assets/img/icon-fb.png";
import "../App.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container className="pt-5 pb-2">
          <Row style={{fontSize: "13px"}}>
            <Col md={6} >
              <h6><b>KangTukang</b></h6>
              <p className="m-0 p-0">
                Jl. D.I. Panjaitan blok B-6 Batu, Tanjungpinang Timur
              </p>
              <p className="m-0 p-0">
                <b>Phone : </b> +(62) 83109072462
              </p>
              <p className="m-0 p-0">
                <b>Email : </b> kangtukang@gmail.com
              </p>
            </Col>
            <Col md={6}>
              <h6><b>Sosial Media</b></h6>
              <ListGroup horizontal className="justify-content-around" style={{width: "104px"}}>
                <a href="#"><Image src={iconTiktok}></Image></a>
                <a href="#"><Image src={iconYt}></Image></a>
                <a href="#"><Image src={iconFb}></Image></a>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <div className="text-center" style={{fontSize: "13px"}}>
            <small >
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
