import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import logo from '../../image/untitled-2.png';
import './Header.css';
import { userContext } from "../../App";

const Header = () => {

    const [loginUser, setLoginUser] = useContext(userContext);
    return (
        <>

            <nav class="navbar navbar-expand-lg container navbar-light bg-primary">
                <div class="container">
                    <Link class="navbar-brand" to="/home">
                        <img src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse menu" id="navbarNav">
                        <ul class="navbar-nav  ms-5">
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item  ">
                                <Link class="nav-link" to="orders">Orders</Link>
                            </li>
                            <li class="nav-item  ">
                                <Link class="nav-link" to="admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/deals"  >Deals</Link>
                            </li>
                            <li class="nav-item ms-3">
                                <Link to="/login"><button type="button " class="btn btn-success">Login</button></Link>
                            </li>
                            <li class="nav-item">
                               <img className="rounded-circle w-50 ms-2" src={loginUser.photoURL} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Header;