
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../RapidDish/Restaurant Logos/rapiddish/rapiddish.png"
import slogan from "../../RapidDish/Restaurant Logos/rapiddish/slogan.png"
import Container from "react-bootstrap/Container"
import { FaLocationDot } from "react-icons/fa6";
import BasketCart from "../../RapidDish/basket cart.png"

import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
    <Container>
    <Navbar expand="lg" className="justify-content-between align-content-center">
     <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="60"
              height="45"
              className="d-inline-block"
            />{' '}
            {/* <img
              alt=""
              src={slogan}
              width="150"
              height="25"
              className="d-inline-block"
            /> */}
            
          </Navbar.Brand>
          <Nav.Item className="d-inline-block">
            <FaLocationDot/><h5>Kurfursten str 22</h5>
          </Nav.Item>
          <Nav.Item>
          <img
                
                alt=""
                src={BasketCart}
                width="40"
                height="40"/>
          </Nav.Item>
      
    </Navbar>
    </Container>
    </div>
  );
}

export default NavBar;