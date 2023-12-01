import React from 'react';
import { Link } from 'react-router-dom';
import { WhoWeAreContent, AboutContent, ServicesContent } from '../contents/Home';

export default function Home() {
    return (
        <>
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className="carousel-inner" role="listbox">

                <div className="carousel-item active">
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown"><span>Bringing World-class </span> Healthcare Products to the Filipinos</h2>
                            <p className="animate__animated animate__fadeInUp">The First ISO-9001:2015 certified Healthcare Products Distribution Company in the Philippines.</p>

                            <Link to="/" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                        </div>
                    </div>
                </div>

            </div>

            </div>
        </section>

        <main id="main">
            <section id="about" className="about">
                <div className="container">

                    <div className="row content">
                        <div className="col-lg-6">
                            <WhoWeAreContent />
                        </div>
                        
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <AboutContent />
                        </div>
                    </div>

                </div>
            </section>

            <section className="counts">
                <div className="container text-white">

                    <div className="row">
                        <div className="col-md-6 col">
                            <h2 className="display-6 text-center fw-semibold border-start mb-3">Progressive Medical Corporation</h2>
                            <p>The First ISO-9001:2015 certified Healthcare Products Distribution Company in the Philippines.</p>
                        </div>
                       
                        <div className="col-md-6 col">
                            <div className="row">
                                <div className="col text-center">
                                    <h2>6257</h2>
                                    <p>Customer</p>
                                </div>
                                <div className="col text-center">
                                    <h2>5124</h2>
                                    <p>Products</p>
                                </div>
                                <div className="col text-center">
                                    <h2>10</h2>
                                    <p>Branches</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="clients" className="clients section-bg">
                <div className="container">

                    <h2 className="display-6 text-center">Trusted by leading hospitals Nationwide</h2>
                    <p>We address the needs of major medical and healthcare industries and practices, including hospitals, medical clinics, healthcare centres and professionals, pharmacies, laboratories, and other institutions focused on the chain of care.</p>

                    <div className="row">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-9.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-10.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-11.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src="assets/img/clients/client-12.png" className="img-fluid" alt="" />
                        </div>

                    </div>

                </div>
            </section>

            <section id="services" className="services"> 
                <div className="container">

                    <div className="row g-4">
                        <ServicesContent column="col-md-6 d-flex align-items-stretch" box="icon-box"/>
                        {/* <div className="col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <i className="bi bi-award"></i>
                            <h4>Quality Assured</h4>
                            <p>We are the first certified healthcare products distribution company in the Philippines. Under the ISO certification, we offer products that are guaranteed to be of the highest quality.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <i className="bi bi-graph-down"></i>
                            <h4>Less cost, more value</h4>
                            <p>Higher quality does not always mean higher prices. We offer competitive prices to ensure our customers receive more value than what they have paid for.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <i className="bi bi-tree"></i>
                            <h4>Environmental Responsibility</h4>
                            <p>We care about the world we live in. All of our packaging is made of recyclable materials.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <i className="bi bi-brightness-high"></i>
                            <h4>We are commited</h4>
                            <p>We care about our partners. Reach out to our customer support and we will address your concerns with utmost attention and care.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <i className="bi bi-database-gear"></i>
                            <h4>A system that works</h4>
                            <p>With a wide distribution channel and efficient infrastructure throughout the Philippines, we are able to ensure that our customers receive their orders anywhere in the Philippines.</p>
                            </div>
                        </div> */}
                    </div>

                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">

                    <div className="row mt-5">

                        <div className="col-lg-4 my-lg-auto">
                            <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>200 C. Raymundo Avenue Caniogan, Pasig City 1606 Philippines</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@pmc.ph</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+63 (2) 8656 6888 / +63 (969) 3156888</p>
                            </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form action="forms/contact.php" className="php-email-form shadow-lg rounded">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </main>
        </>
    );
}