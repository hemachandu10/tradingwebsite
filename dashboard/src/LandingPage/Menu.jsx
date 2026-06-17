import React from 'react';
import { Link } from 'react-router'
import axios from 'axios'

function Menu() {
    async function logout() {
        console.log("hi")
        let response=await axios.post(
            "http://localhost:8080/logout",
            {},
            { withCredentials: true }
        );
        console.log(response.data)
        if(response.data.success){
            window.location.replace("http://localhost:5173/");
        }else{
             alert(response.data.message);
        }
    }
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/orders">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/holdings">Holdings</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/positions">Positions</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/funds">Funds</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/apps">Apps</Link>
                </li>
                <li className="nav-item">
                    <div className="btn-group ps-2 pe-5" >
                        <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-user"></i> user info
                        </button>
                        <ul className="dropdown-menu text-center">
                            <li><p>Action</p></li>
                            <li><p>Another action</p></li>
                            <li><p>Something else here</p></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button onClick={logout} style={{ border: "none", backgroundColor: "white" }}>Logout</button></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Menu;