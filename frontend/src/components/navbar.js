import React from 'react';
import {Link} from "react-router-dom";


export default class Navbar extends React.Component
{
    render()
    {
        return(
            <div>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="wrap-top-information">
                  <ul className="list-inline left">
                    <li><a href="#"><i className="fa fa-phone" /><span>Tel:07 290 986 1386 </span></a></li> 
                    <li><a href="#"><i className="fa fa-home" /><span>Email: dari@gmail.com </span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="wrap-top-information">
                  <ul className="list-inline right">
                    <li><a href="#"><i className="fa fa-question-circle" /><span>Avez-vous des questions </span></a></li> 
                    <li><a href="sign-in.html"><span className="box-button">OBTENIR UN RENDEZ-VOUS</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====  End of Section pageheader  ====*/}
        <nav className="navbar navbar-default navbar-sticky white bootsnav">

          <div className="container">
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <div className="social hidden-xs hidden-sm">
                <ul>
                  <li>
                    <a className="social-facebook" data-original-title="facebook" data-placement="bottom" data-toggle="tooltip" href="#" title>
                      <i className="fa fa-facebook ">
                      </i>
                    </a>
                  </li>
                  <li>
                    <a className="social-twitter" data-original-title="twitter" data-placement="bottom" data-toggle="tooltip" href="#" title>
                      <i className="fa fa-twitter">
                      </i>
                    </a>
                  </li>
                  <li>
                    <a className="social-google" data-original-title="google plus" data-placement="bottom" data-toggle="tooltip" href="#" title>
                      <i className="fa fa-google-plus">
                      </i>
                    </a>
                  </li>
                  <li>
                    <a className="social-youtobe" data-original-title="youtobe" data-placement="bottom" data-toggle="tooltip" href="#" title>
                      <i className="fa fa-youtube-play">
                      </i>
                    </a>
                  </li>
                  <li>
                    <a className="social-instagram" data-placement="bottom" data-toggle="tooltip" href="#" title="instagram">
                      <i className="fa fa-instagram">
                      </i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            {/* End Atribute Navigation */}
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button className="navbar-toggle" data-target="#navbar-menu" data-toggle="collapse" type="button">
                <i className="fa fa-bars">
                </i>
              </button>
              <a className="navbar-brand" href="#brand">
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                  <a href="about-us.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about-us.html">
                  À propos de nous
                  </a>
                </li>
                <li>
                  <Link to="/login">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link  href="contact-us.html">
                    Contacter nous
                  </Link >
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
        </nav>
            </div>
        );
    } 
}