import { render } from '@testing-library/react';
import React from 'react';

export default class Cards extends React.Component
{
    render(){
        return(
            <div>
                <div className="wrap-catagory pdt60 pdbt60">
                <div className="container">
                    <div className="row wow">
                    <div className="title-head">
                        <h3 className="text-center mb30 wow fadeInRight delay-07s">
                        Trouver des emplacements Propriété populaire <br /> Dans Tanger
                        </h3>
                        <div className="c-line c-line-center c-line-short c-dot c-bg-yellow c-bg-after-yellow">
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 wow fadeInLeft delay-07s">
                        <a className="catagory-locations property-cat-apartments" href="#">
                        <div className="locations-overlay">
                            <div className="locations-text">
                            <h3>
                                M'SALLAH
                            </h3>
                            <p>
                                Centre ville , Tanger
                            </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 wow fadeInRight delay-07s">
                        <a className="catagory-locations property-cat-house ">
                        <div className="locations-overlay">
                            <div className="locations-text">
                            <h3>
                                IBERIA
                            </h3>
                            <p>
                            Centre ville , Tanger
                            </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm-4 col-md-4 wow fadeInDown delay-07s">
                        <a className="catagory-locations property-cat-ruko wow fadeInUp delay-04s">
                        <div className="locations-overlay">
                            <div className="locations-text">
                            <h3>
                                MARSHAN
                            </h3>
                            <p>
                                Centre ville , Tanger
                            </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm-4 col-md-4 wow fadeInUp delay-07s">
                        <a className="catagory-locations property-cat-tanah">
                        <div className="locations-overlay">
                            <div className="locations-text">
                            <h3>
                                MALABATA
                            </h3>
                            <p>
                                Cornich , Tanger
                            </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm-4 col-md-4 wow fadeInDown delay-07s">
                        <a className="catagory-locations property-cat-rent">
                        <div className="locations-overlay">
                            <div className="locations-text">
                            <h3>
                                MESNANA
                            </h3>
                            <p>
                            Sud Ouest , Tanger
                            </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}