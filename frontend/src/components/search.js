import React from 'react';
import axios from 'axios';
import {
    Redirect,
  } from "react-router-dom";

export default class Search extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            keyword : "",
            type_pro : "0",
            status: "0",
            chambre : "0",
            saleBains : "0",
            min : "",
            max: "",
            response : false,
        };
    }

    click = () => {
        // console.log(this.state);
        const mythis = this;
        axios.post('http://127.0.0.1:8000/search', {
            keyword : this.state.keyword,
            type_pro : this.state.type_pro,
            status: this.state.status,
            chambre : this.state.chambre,
            saleBains : this.state.saleBains,
            min : this.state.min,
            max: this.state.max,
          })
          .then(function (response) {
            console.log(response.data);
            mythis.setState({response : true})
          })
          .catch(function (error) {
            alert(error);
          });
    }

    change = (e , p) => 
    {
        switch (p)
        {
            case 0 :
                this.setState(
                    {
                        keyword : e.target.value 
                    }
                    );
                break; 
            case 2:
                this.setState(
                    {
                        type_pro : e.target.value 
                    }
                    );
                break;
            case 3:
                this.setState(
                    {
                        status : e.target.value 
                    }
                    );
                break;
            case 4:
                this.setState(
                    {
                        chambre : e.target.value 
                    }
                    );
                break;
            case 5:
                this.setState(
                    {
                        saleBains : e.target.value 
                    }
                    );
                break;    
            case 6:
                this.setState(
                    {
                        min : e.target.value 
                    }
                    );
                break;   
            case 7:
                this.setState(
                    {
                        max : e.target.value 
                    }
                    );
                break;   }
    }

    render(){
        if(this.state.response) 
        {
            return <Redirect to="/result" />;
        }

        return(
            <div>
                <div className="wrap-form-property">
                <div className="container">
                    <div className="row wow">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="title-head">
                        <h3 className="text-center mb30 wow fadeInRight delay-07s">
                        Chercher La Propriété Que Vous Recherchez
                        </h3>
                        <div className="c-line c-line-center c-line-short c-dot c-bg-yellow c-bg-after-yellow">
                        </div>
                        </div>
                        <div className="panel panel-default wow fadeInLeft delay-07s">
                        <div className="panel-body">
                            <form action="#">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="form-group mt15">
                                <input className="form-control" placeholder="Mot-clé" value={this.state.value}  onChange={(e) => this.change(e , 0)} type="text" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3">
                                <div className="form-group mt15">
                                {/* single dropdown */}
                                <select onChange={(e) => this.change(e , 2)} className="form-control chosen-select" data-placeholder="property type" id="property-type">
                                    <option value="0">
                                    Appartment
                                    </option>
                                    <option value="1">
                                    Maisons
                                    </option>
                                    <option value="2">
                                    Commerciale
                                    </option>
                                    <option value="3">
                                    Garage
                                    </option>
                                </select>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2">
                                <div className="form-group mt15">
                                {/* single dropdown */}
                                <select onChange={(e) => this.change(e , 3)} className="form-control chosen-select" data-placeholder="Property Status" id="property-status">
                                    <option value="0">
                                    à Vendre
                                    </option>
                                    <option value="1">
                                    à Louer
                                    </option>
                                </select>
                                </div>
                            </div>
                            <div className="clearfix">
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2">
                                <div className="form-group mt15">
                                {/* single dropdown */}
                                <label htmlFor="">Chambres</label>
                                <select onChange={(e) => this.change(e , 4)} className="chosen-select form-control" data-placeholder="Bed Room" id="bedroom">
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>
                                    3
                                    </option>
                                    <option value={4}>
                                    4
                                    </option>
                                    <option value={5}>
                                    5
                                    </option>
                                </select>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2">
                                <div className="form-group mt15">
                                {/* single dropdown */}
                                <label htmlFor="">Salle de bains</label>
                                <select onChange={(e) => this.change(e , 5)} className="form-control chosen-select" data-placeholder="Bath Room" id="bathroom">
                                    <option value={0}>
                                    0
                                    </option>
                                    <option value={1}>
                                    1
                                    </option>
                                    <option value={2}>
                                    2
                                    </option>
                                    <option value={3}>
                                    3
                                    </option>
                                    <option value={4}>
                                    4
                                    </option>
                                    <option value={5}>
                                    5
                                    </option>
                                </select>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3">
                                <div className="form-group mt15" style={{flexDirection: 'row' , display: 'flex' , marginTop : '15%'}}>
                                    <label style={{marginRight: '5%'}}>
                                    Prix:
                                    </label>
                                    <div>
                                        <input className="form-control " placeholder="Min" value={this.state.value}  style={{width: '15vw'}}  onChange={(e) => this.change(e , 6)} type="text" />
                                    </div>
                                    &nbsp;
                                    <div>
                                        <input className="form-control" placeholder="Max" value={this.state.value} style={{width: '15vw'}} onChange={(e) => this.change(e , 7)} type="text" />
                                    </div>
                                    <div>
                                        <a className="btn button-sm button-theme" onClick={this.click} style={{marginLeft: '10vw'}}>
                                            <i className="fa fa-search"></i>
                                            Chercher
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}