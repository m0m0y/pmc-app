import React from 'react';
import { Link } from "react-router-dom";
import { CompanyProfile, Social, Links } from './contents/Footer';

export default function Footer() {

    return(
        <>
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-6 col-md-6">
                        <div className="footer-info">
                            <CompanyProfile />
                        <div className="social-links mt-3">
                            <Social />
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <Links />
                        </ul>
                    </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>

        <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
        </>
    );
}