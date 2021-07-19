import React from 'react';
import {Link} from "react-router-dom";

export default class Login extends  React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            Email : "",
            password : "",
        };
    }

    changer = (e,p) => 
    {
        p===0? this.setState({Email : e.target.value}) : this.setState({password : e.target.value})
    }

    render()
    {
        return(
            <div>
                <div className="wrap-bg-logreg" style={{'marginLeft' : '10%'}}>
                    <div className="wrap-login pdt80">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="login-page">
                            <div className="col-xs-12 col-sm-7 col-md-7 nopadd">
                                <div className="panel noradius">
                                <div className="panel-default">
                                    <div className="panel-heading">
                                    <h3>
                                        Welcome
                                    </h3>
                                    </div>
                                    <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                        <label>
                                            Email
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon"></span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.changer(e , 0)} value={this.state.Email} className="form-control input-lg" placeholder="Email" type="text" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label>
                                            Password
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon"></span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.changer(e , 1)} value={this.state.password} className="form-control input-lg" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        </div>

                                        <div className="col-xs-8 col-sm-8 col-md-8">
                                        <div className="pull-right">
                                            <h6>
                                            Don't have an account ?
                                            <Link to="register">
                                                Register Now
                                            </Link>
                                            </h6>
                                        </div>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                        <button className="btn button-md button-theme btn-block" type="submit">
                                        <i className="fa fa-user-plus">
                                        </i>
                                        Sign in
                                        </button>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
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