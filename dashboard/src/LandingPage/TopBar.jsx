import React from 'react';
import Menu from './Menu'
import {Link} from 'react-router'

function TopBar() {
    return (
        <>
            <div className="dash-Navbar">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">BHC</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">BSE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">NEFTY 50</Link>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <Menu/>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default TopBar;