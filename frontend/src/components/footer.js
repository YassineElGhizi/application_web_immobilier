import React from 'react';

export default class Footer extends React.Component
{
    render(){
        return(
            <div>
                <footer id="footer">
                    <div className="container">
                        <div className="footer-one">
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                            <div className="footer-logo">
                                <img src="assets/images/clemira-logo.png" alt="" />
                            </div>
                            <p>
                                <span className="copyright text-uppercase">Dari Locations</span> Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-3">
                            <h4>
                                Navigation
                            </h4>
                            <ul className="col-md-6 menu hide-bullets nopadding">
                                <li>
                                <a href="#">
                                    Home
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Sell
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Rent
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Blog
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Contact Us
                                </a>
                                </li>
                            </ul>
                            <ul className="col-md-6 menu hide-bullets nopadding">
                                <li>
                                <a href="#">
                                    About Us
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Advertise
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Service
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="col-sm-12 col-md-4">
                            <h4>
                                Subscribe &amp; News Letter
                            </h4>
                            <div className="wrap-newsletter">
                                <p>
                                Get information Sales property on our site
                                </p>
                                <div className="input-group">
                                <input className="form-control input-lg" placeholder="Subscribe to your email valid" type="text" />
                                <span className="input-group-btn">
                                    <button className="btn btn-lg button-theme" type="button">
                                    <i className="fa fa-envelope">
                                    </i>
                                    </button>
                                </span>
                                </div> 
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="footer-two">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                            <div className="text-center">
                                Copyright © 2021
                                <strong>
                                Dari Locations
                                </strong>
                                —
                                <a className="copyright" href="#">
                                Dari Locations
                                </a>
                                | Digital All Rights Reserved.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </footer>
            </div>
        );
    }
}