import React from 'react';
import logo from '../assets/images/logo.svg';
import './home/style.css';
import {Link} from 'react-router'

function Navbar() {
  return (
    <>
      <div className="top">
        <nav class="navbar navbar-expand-lg border-bottom pt-3 pb-3" style={{backgroundColor:"#ffffff" }}>
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="Logo" className="img-fluid pr-3" style={{ width: '22%' }} />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/about">About</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active" to="/products">Products</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active" to="/pricing">Pricing</Link>
                </li>
                 <li class="nav-item">
                  <Link class="nav-link active" to="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;