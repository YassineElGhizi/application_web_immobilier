import React from 'react';

export default class Conseil extends React.Component
{
    render(){
        return(
            <div>
                <div className="wrap-blog pdt40 pdbt60">
                    <div className="container">
                        <h3>
                        Articles &amp; Conseils
                        </h3>
                        <div className="row wow">
                        <div className="col-sm-4 col-md-4 wow fadeInUp delay-07s">
                            <div className="post">
                            <div className="post-img">
                                <img alt="" className="img-responsive" src="assets/images/640x450.jpg" />
                                <div className="over-layer">
                                <ul className="post-link">
                                    <li>
                                    <a className="fa fa-link" href="#" title="#">
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="post-content">
                                <h3 className="post-title">
                                <a href="#" title="#">
                                6 conseils pour vous aider à vendre votre maison
                                </a>
                                </h3>
                                <p className="post-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, assumenda.
                                </p>
                                <a className="read-more" href="#">
                                Lire la suite
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 wow fadeInUp delay-07s">
                            <div className="post">
                            <div className="post-content">
                                <h3 className="post-title">
                                <a href="#" title="#">
                                8 conseils pour vous aider à trouver une nouvelle maison
                                </a>
                                </h3>
                                <p className="post-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dignissimos.
                                </p>
                                <a className="read-more" href="#">
                                Lire la suite
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 wow fadeInUp delay-07s">
                            <div className="post">
                            <div className="post-content">
                                <h3 className="post-title">
                                <a href="#" title="#">
                                Que faire un an avant d'acheter un appartement
                                </a>
                                </h3>
                                <p className="post-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, fugit!
                                </p>
                                <a className="read-more" href="#">
                                Lire la suite
                                </a>
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