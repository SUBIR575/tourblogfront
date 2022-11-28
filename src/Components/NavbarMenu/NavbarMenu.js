import React, { useState,useEffect} from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import "./NavbarMenu.css";
import Topbar from "./Topbar";
import DayNightToggle from "react-day-and-night-toggle";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    if(isDarkMode)
    document.body.className = "darkMode"
    else{
      document.body.className = "lightMode"
    }
  }, [isDarkMode]);
  console.log("value", isDarkMode);
  return (
    <>
      <Topbar />
      <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png"
              width="60"
              height="60"
              className="d-inline-block align-top brand-logo"
            />
            <h1 className="brand-text">Tour</h1>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse collapseOnSelect>
            <Nav
              className="me-auto nav-links justify-content-end"
              style={{ width: "100%" }}
            >
              <Nav.Link className="nav-link">
                <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link
                  to="/addtour"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Add Tour
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link
                  to="/dashboard"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link
                  to="/dashboard"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <DayNightToggle
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  checked={isDarkMode}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
