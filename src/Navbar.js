import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Navbar() { 
    return(
        <>
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">

                <Link to="/" className="logo me-auto">
                    <img src="https://pmc.ph/app/static/image/logo.png" alt="" className="img-fluid"/>
                </Link>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/" className="block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:text-black-800 lg:p-0">Home</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>

        <Outlet />

        <Footer/>
        </>
    );
}