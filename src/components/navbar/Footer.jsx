import React from 'react'
import './style1.css';

const Footer = () => {
  return (
    <section id='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="navbar-brand text-white text-wrap">NIEC Yogyakarta Co-Working Space</div>
                <div className="row">
                    <div className="col-lg-2 footer-menu text-white">
                        <p>Menu</p>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Why Us</a></li>
                        </ul>
                    </div>
                    {/* <div className="col-lg-2 footer-menu text-white">
                        <p>Features</p>
                        <ul>
                            <li><a href="">Bussiness Marketing</a></li>
                            <li><a href="">User Analytic</a></li>
                            <li><a href="">Live Chat</a></li>
                            <li><a href="">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 footer-menu text-white">
                        <p>Resources</p>
                        <ul>
                            <li><a href="">IOS & Android</a></li>
                            <li><a href="">Watch a Demo</a></li>
                            <li><a href="">Customers</a></li>
                            <li><a href="">API</a></li>
                        </ul>
                    </div> */}
                    <div className="col-lg-4 col-sm-6 footer-menu text-white">
                        <p>Get In Touch</p>
                        <div class="input-group mb-3">
                        <input type="email" className="form-control shadow-none" placeholder="Your Email" />
                        <button className="btn btn-outline-secondary btn-subscribe shadow-none" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom d-flex align-items-center">
            <div className="container">
                <p>NIEC Team All Right Reserved</p>
            </div>
        </div>
    </section>
  )
}

export default Footer