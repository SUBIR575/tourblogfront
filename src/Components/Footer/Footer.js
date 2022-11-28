import React from "react";
import './Footer.scss'
const Footer = () => {
  return (
    <>
      <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Product</span>
          </li>
          <li className="nav-item">
            <p>
              Product 1
            </p>
          </li>
          <li className="nav-item">
            <p>
              Product 2
            </p>
          </li>
          <li className="nav-item">
            <p>
              Plans &amp; Prices
            </p>
          </li>
          <li className="nav-item">
            <p>
              Frequently asked questions
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <p>
              About us
            </p>
          </li>
          <li className="nav-item">
            <p>
              Job postings
            </p>
          </li>
          <li className="nav-item">
            <p>
              News and articles
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact &amp; Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <i className="fas fa-phone" />
              +47 45 80 80 80
            </span>
          </li>
          <li className="nav-item">
            <p>
              <i className="fas fa-comments" />
              Live chat
            </p>
          </li>
          <li className="nav-item">
            <p>
              <i className="fas fa-envelope" />
              Contact us
            </p>
          </li>
          <li className="nav-item">
            <p>
              <i className="fas fa-star" />
              Give feedback
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center">
      <i className="fas fa-ellipsis-h" />
    </div>
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright © Your Website {new Date().getFullYear()}</span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
