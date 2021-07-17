import React from 'react';

export default class Feature extends React.Component
{
    render(){
        return(
            <div>
                <div className="wrap-features">
                    <div className="row wow">
                        <div className="col-xs-12 col-sm-12 col-md-6 pull-right nopadd">
                        <div className="right-redbox">
                            <div className="row padd50 text-white">
                            <h3 className="text-center mb30 nopadd">
                                <b>
                                NOS SERVICES
                                </b>
                            </h3>
                            <div className="col-xs-6 col-sm-6 col-md-6 wrap-features-listing padd20 wow fadeInRight delay-07s">
                                <i className="fa fa-home fa-4x">
                                </i>
                                <h3>
                                Résidentielle
                                </h3>
                                <p>
                                Duis autem vel eum iriure dolor in hend rerit in vulputate velit esse molestie vel illum dolore nulla facilisis.
                                </p>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 wrap-features-listing padd20 wow fadeInRight delay-07s">
                                <i className="fa fa-building fa-4x">
                                </i>
                                <h3>
                                Commerciale
                                </h3>
                                <p>
                                Duis autem vel eum iriure dolor in hend rerit in vulputate velit esse molestie vel illum dolore nulla facilisis.
                                </p>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 wrap-features-listing padd20 wow fadeInLeft delay-07s">
                                <i className="fa fa-users fa-4x">
                                </i>
                                <h3>
                                Notre meilleur personnel
                                </h3>
                                <p>
                                Duis autem vel eum iriure dolor in hend rerit in vulputate velit esse molestie vel illum dolore nulla facilisis.
                                </p>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 wrap-features-listing padd20 wow fadeInLeft delay-07s">
                                <i className="fa fa-cogs fa-4x">
                                </i>
                                <h3>
                                Services 24h/24
                                </h3>
                                <p>
                                Duis autem vel eum iriure dolor in hend rerit in vulputate velit esse molestie vel illum dolore nulla facilisis.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}