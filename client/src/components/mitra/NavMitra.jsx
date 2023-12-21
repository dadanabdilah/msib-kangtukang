import { Container, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import "../../App.css";
import logo from "./../../assets/img/logo.png";
import people from "../../assets/img/testimoni/man.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavMitra() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 pb-3 shadow-sm">
        <Container>
          <a className="navbar-brand" href="#">KangTukang</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">Order</a>
              <a className="nav-link" href="#">Negosiasi</a>
            </div>
            <div style={{flexDirection:"row"}} className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="avatar avatar-sm mt-2">
                        <img src="https://app.albimediagroup.com/assets/avatars/user.png" style={{width : "40px"}} alt="..." className="avatar-img rounded-circle"/>
                    </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/logout"><i className="fe fe-log-out fe-16 mr-3"></i>Logout</a>
                </div>
            </li>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
