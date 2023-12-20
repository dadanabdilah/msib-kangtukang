import { Container, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import "../../App.css";
import logo from "./../../assets/img/logo.png";
import people from "../../assets/img/testimoni/man.png"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavMitra() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body border-bottom">
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{width: "300px"}}
            >
              <Offcanvas.Header closeButton className="py-2 shadow-sm ">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={logo} style={{ width: "30px" }} /> Kang Tukang
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="">
                    <Image
                      src={people}
                      alt=""
                      style={{ width: "30px" }}
                      className="shadow rounded-circle"
                    />
                    <p className="d-inline ps-3 opacity-75">Admin</p>
                  </div>
                  <Nav.Link href="/mitra" className="mt-3 ps-2">
                    <i className="bi bi-clipboard-fill opacity-50" style={{fontSize: "20px"}}></i>
                    <p className="px-3 d-inline opacity-75">Order</p>
                  </Nav.Link>
                  <Nav.Link href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="pt-2 ps-2">
                  <i className="bi bi-chat-dots-fill opacity-50" style={{fontSize: "20px"}}></i>
                  <p className="px-3 d-inline opacity-75">Chat</p>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
