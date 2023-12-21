import { Container, Navbar, Nav, Image } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../App.css";
import { useEffect, useState } from "react";
import "../pages/Home";

// eslint-disable-next-line react/prop-types
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: scrolled ? "#eccb18" : "white" }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/home">
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end fw-semibold w-100 py-1">
              <Nav.Link
                href="/home"
                style={{ color: scrolled ? "white" : "black" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#layanan"
                style={{ color: scrolled ? "white" : "black" }}
              >
                Layanan
              </Nav.Link>
              <Nav.Link
                href="#testimoni"
                style={{ color: scrolled ? "white" : "black" }}
              >
                Testimoni
              </Nav.Link>
              <Nav.Link
                href="#tentang"
                style={{ color: scrolled ? "white" : "black" }}
              >
                Tentang
              </Nav.Link>
              <Nav.Link
                href="/galeri"
                style={{ color: scrolled ? "white" : "black" }}
              >
                Galeri
              </Nav.Link>
              <Nav.Link
                href="/caritukang"
                style={{ color: scrolled ? "white" : "black" }}
              >
                Cari Tukang
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
