import React from 'react';

export default class Agent extends React.Component
{
    render(){
        return(
            <div>
                <div className="wrap-agent-home">
                    <div className="container">
                        <div className="row wow">
                        <div className="hidden-xs hidden-sm col-md-4 wow fadeInLeft delay-07s">
                            <div className="agent-img">
                            <img alt="" src="assets/images/334x500.png" />
                            </div>
                        </div>
                        <div className="col-md-8 padd50 wow fadeInRight delay-07s">
                            <div className="text-agent">
                            <h3>
                            Rencontrez notre agent
                            </h3>
                            {/* <p>We’re full-service, local agents who know how to find people and home each together. We use online tools with an unmatched search capability to make you smarter and faster.</p> */}
                            </div>
                            <div className="agent-profile">
                            <h3>
                                <em>Jhon Doe</em>
                            </h3>
                            <span className="agent-profile-catagory">
                            Agent immobilier
                            </span>
                            </div>
                            <div className="profile-desc">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            </div>
                            <div className="info">
                            <a className="faa-parent animated-hover" href="#">
                                <i className="fa fa-phone">
                                </i>
                                +212 18 00 38 75
                            </a>
                            <a className="faa-parent animated-hover" href="#">
                                <i className="fa fa-envelope faa-passing">
                                </i>
                                jhonDoe@gmail.com
                            </a>
                            </div>
                            <a className="btn button-md button-theme btn-lg" href="agent.html">
                            Contacter l'agent
                            <i className="fa fa-long-arrow-right">
                            </i>
                            </a>
                        </div>
                        <div className="hidden-md hidden-lg col-xs-12">
                            <div className="agent-img paddt40">
                            <img alt="" src="assets/images/businessman.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}