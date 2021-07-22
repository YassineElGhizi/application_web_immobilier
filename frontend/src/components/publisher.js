import React from 'react';
import {
    Redirect,
  } from "react-router-dom";

import image10 from '../assets/images/10.jpg';
import Add from './subComponents/add';
import axios from 'axios';

export default class Publisher extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            clicked : 0,
            data : [{}],
            totalpages : ""
        };
      }
    
    
    componentDidMount()
    {
        axios.post('http://127.0.0.1:8000/getall' , {
            id : this.props.id
        })
        // .then(function (response) {
        .then( (response) => {
            console.log(response);
            this.setState({data : response.data , totalpages : (response.data.length)%2 === 0? (response.data.length)/2: ((response.data.length)/2) + 0.5 })
            
        })
        .catch(function (error) {
            alert(error);
        });
    }

    toggle = () => 
    {
        this.state.clicked === 0? this.setState({clicked : 1}) : this.setState({clicked : 0})
    }

    nextPage = () =>
    {
        console.log('a');
    }

    render(){
        if (this.props.authorized != 2 )
        {
            alert("publisher.js :Ur not Authorized");
            alert(this.props.authorized)
            return <Redirect to="/login" />
        }

        return(
            <div>
                    {/*====  End of Section breadcrumb  ====*/}
                    <div className="pdt80 pdbt80">
                    <div className="container">
                        <div className="row wow">
                        <div className="col-xs-12 col-sm-12 col-md-8 wow fadeInUp delay-07s">
                            <div className="row">
                            {/*==================================
            =            Section Blog            =
            ===================================*/}
                             {this.state.data.map( i =>  {
                                    return (
                                <div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp delay-07s"> 
                                <article className="post">
                                <div className="post-img">
                                    <img alt="" className="img-responsive" src={i.image} />
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
                                        {i.titre}
                                    </a>
                                    </h3>
                                    <p className="post-description">
                                    {i.description}
                                    </p>
                                    <a className="read-more" href="#">
                                    UPDATE
                                    </a>
                                    <br/>
                                    <br/>
                                    <a className="read-more" href="#">
                                    DELETE
                                    </a>
                                </div>
                                </article>
                            </div>
                                    )
                                })}
                            {/* <div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp delay-07s"> 
                                <article className="post">
                                <div className="post-img">
                                    <img alt="" className="img-responsive" src={image10} />
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
                                        Maison trois etages
                                    </a>
                                    </h3>
                                    <p className="post-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, assumenda.
                                    </p>
                                    <a className="read-more" href="#">
                                    UPDATE
                                    </a>
                                    <br/>
                                    <br/>
                                    <a className="read-more" href="#">
                                    DELETE
                                    </a>
                                </div>
                                </article>
                            </div> */}

                            {/*====  End of Section Blog  ====*/}
                            </div>
                            <div className="text-center">
                            <div className="pagination">
                                <a href="#">
                                «
                                </a>
                                <a href="#">
                                1
                                </a>
                                <a className="active" href="#">
                                2
                                </a>
                                <a href="#">
                                3
                                </a>
                                <a href="#">
                                4
                                </a>
                                <a href="#">
                                5
                                </a>
                                <a href="#">
                                6
                                </a>
                                <a onClick={this.nextPage}>
                                »
                                </a>
                            </div>
                            </div>
                            {/*====  End of Section Pagination  ====*/}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp delay-07s ">
                            <div className="panel panel-default m20">
                            <div className="panel-body">   
                                <div className="sidebar-blog wow">
                                <div className="title">
                                    <h3>
                                    ACTIONS
                                    </h3>
                                </div>
                                <div className="sidebar-body wow fadeInUp delay-07s">
                                    <div className="tag">
                                    <a onClick={this.toggle}>
                                        CLICK TO ADD
                                    </a>
                                    </div>
                                </div>
                                {this.state.clicked ? <Add id={this.props.id}/> : <br />}  
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