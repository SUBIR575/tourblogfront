import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/AuthSlice";
import decode from 'jwt-decode';
const Topbar = () => {
  const [token, setToken] = useState();
  const state = useSelector((state) => state?.auth.token);
  console.log(state);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [state]);
  if(token){
    const decodeToken = decode(token);
    if(decodeToken.exp * 1000 < new Date().getTime()){
      dispatch(logout());
    }
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <div className="top-left">
              <span className="top-btn-left">
                <i class="fas fa-map-marked-alt" style={{paddingRight:'5px'}}>
                </i>
                <Link style={{  textDecoration: "none" }}>103, Beleghata Main Rd, Subhas Sarobar Park</Link>
              </span>
            </div>
          </Col>
          <Col sm={6} style={{ padding: "0px" }}>
            <div className="top-right">
              {!token ? (
                <>
                  <span className="top-btn c1">
                    <i className="fas fa-sign-in-alt" style={{paddingRight:'5px'}}></i>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none" }}
                    >
                      Sign in
                    </Link>
                  </span>
                  <span className="top-btn c3">
                    <i className="fas fa-clipboard-list" style={{paddingRight:'5px'}}></i>
                    <Link
                      to="/register"
                      style={{  textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
                  </span>
                </>
              ) : (
                <span className="top-btn c2"  onClick={handlelogout}>
                  <i className="fas fa-sign-out-alt"  style={{paddingRight:'5px'}}></i>
                  <Link style={{  textDecoration: "none" }}>Sign Out</Link>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topbar;
