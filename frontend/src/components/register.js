import React from 'react';

export default class Register extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            password : "",
            repassword : "",
            Tel : "",
        };
    }

    change = (e , p) => 
    {
        switch (p)
        {
            case 0 :
                this.setState(
                    {
                        name : e.target.value 
                    }
                    );
                break; 
            case 1 :
                this.setState(
                    {
                        email : e.target.value 
                    }
                    );
                break; 
            case 2:
                this.setState(
                    {
                        password : e.target.value 
                    }
                    );
                break;
            case 3:
                this.setState(
                    {
                        repassword : e.target.value 
                    }
                    );
                break; 
            case 4:
                this.setState(
                    {
                        Tel : e.target.value 
                    }
                    );
                break; 
        }
    }

    click = (e) => 
    {
        e.preventDefault();
        let scoreCalculator = () =>
        {
            let score = 0
            this.state.email.includes("@") ? score += 1 : score += 0
            this.state.password.length > 8 ? score += 1 : score += 0
            this.state.password === this.state.repassword ? score += 1 : score += 0
            this.state.name === "" ? score += 0 : score += 1
            isNaN(this.state.Tel) ? score += 0 : score += 1
            return score
        }
        let sendRequest = () =>
        {
            console.log(this.state)
        }
        scoreCalculator() === 5 ? sendRequest() : alert('SomeThing Missing !!')

    }
    render(){
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
                                    CRÉER UN COMPTE
                                    </h3>
                                    </div>
                                    <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                        <label>
                                            nom
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon">
                                            </span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.change(e , 0)} value={this.state.name} className="form-control input-lg" placeholder="Nom et Prenom" type="text"/>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label>
                                            Tel
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon">
                                            </span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.change(e , 4)} value={this.state.Tel} className="form-control input-lg" placeholder="+212 ..." type="text"/>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label>
                                            Email
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon">
                                            </span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.change(e , 1)} value={this.state.email} className="form-control input-lg" placeholder="Email" type="text" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label>
                                            Password
                                            <span className="text-gray">
                                            minimal 8 characters
                                            </span>
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon">
                                            </span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.change(e , 2)} value={this.state.password}  className="form-control input-lg" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label>
                                            Repeat Password
                                        </label>
                                        <div className="input-group input-group-md">
                                            <span className="input-group-addon">
                                            </span>
                                            <div className="icon-addon addon-md">
                                            <input onChange={(e) => this.change(e , 3)} value={this.state.repassword} className="form-control input-lg" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        </div>
                                        <button onClick={this.click} className="btn button-md button-theme btn-block" >
                                        <i className="fa fa-user-plus">
                                        </i>
                                        CRÉER UN COMPTE
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