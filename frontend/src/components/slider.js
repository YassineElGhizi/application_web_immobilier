import React from 'react';

import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';


export default class Slider extends React.Component
{
    render()
    {
        return(
            <div>
              <section id="home_slides" className="home_slides">
                <div className="carousel slide" data-ride="carousel" id="home-slider">
                  {/* Indicators */}
                  <ol className="carousel-indicators">
                    <li className="active" data-slide-to={0} data-target="#home-slider">
                    </li>
                    <li data-slide-to={1} data-target="#home-slider">
                    </li>
                    <li data-slide-to={2} data-target="#home-slider">
                    </li>
                  </ol>
                  {/* Wrapper for slides */}
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img alt="" src={image1} />
                      <div className="carousel-caption">
                        <h1 className="animated bounceInLeft">
                          Dari Locations
                        </h1>
                        <p className="animated bounceInRight">
                          Mesnana, route Rahrah, complexe Abdalass Kawacim, Bloc 2, Tanger
                        </p>
                        {/* <a class="active animated fadeInUp" href="#">Contact Agent</a> */}
                        <a className="btn button-md button-theme animated fadeInUp" href="#">
                          Plus de Détails
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <img alt="" src={image2} />
                      <div className="carousel-caption">
                        <h1 className="animated bounceInLeft">
                        Dari Locations
                        </h1>
                        <p className="animated bounceInRight">
                        Mesnana, route Rahrah, complexe Abdalass Kawacim, Bloc 2, Tanger
                        </p>
                        {/* <a class="active animated fadeInUp" href="#">Contact Agent</a> */}
                        <a className="btn button-md button-theme animated fadeInUp" href="#">
                        Plus de Détails
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <img alt="" src={image3} />
                      <div className="carousel-caption">
                        <h1 className="animated bounceInLeft">
                        Dari Locations
                        </h1>
                        <p className="animated bounceInRight">
                        Mesnana, route Rahrah, complexe Abdalass Kawacim, Bloc 2, Tanger
                        </p>
                        {/* <a class="active animated fadeInUp" href="#">Contact Agent</a> */}
                        <a className="btn button-md button-theme animated fadeInUp" href="#">
                        Plus de Détails
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        );
    } 
}