import React from 'react';
import {
    Redirect,
  } from "react-router-dom";

import Add from './subComponents/add';
import axios from 'axios';

export default class Publisher extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            clicked : 0,
            data : [{}],
            totalpages : "",
            neededItems : [],
            pagginationButtuns : [1,2,3,4,5],
            currentPage : 1,
            len : 0
        };
      }
    
    componentDidMount()
    {
        axios.post('http://127.0.0.1:8000/getall' , {
            id : this.props.id
        })
        .then( (response) => {
            console.log(response);
            this.setState( prev => {
                    let tmp = [];
                    tmp.push(response.data[0])
                    tmp.push(response.data[1])
                    return{
                        data : response.data,
                        len : response.data.length,
                        totalpages : (response.data.length)%2 === 0? (response.data.length)/2: ((response.data.length)/2) + 0.5,
                        neededItems : tmp
                    }
                }
            )
        })
        .catch(function (error) {
            alert(error);
        });
    }

    pagination = (i) => {
        this.setState({currentPage : i})
        let s = (i*2)-2;
        let f = (i*2)-1;
        let tmp = [];
        if(s < 0){
            tmp.push(this.state.data[0])
            tmp.push(this.state.data[1])
            this.setState( {neededItems : tmp})
        }else{
            tmp.push(this.state.data[s])
            tmp.push(this.state.data[f])
            this.setState( {neededItems : tmp})
        }
        switch (i)
          {
            case 1 :
                this.setState(
                    {
                      pagginationButtuns : [1,2,3,4,5] 
                    });
                break;
            case 2 :
                this.setState(
                    {
                      pagginationButtuns : [1,2,3,4,5] 
                    });
                break;
            case 3 :
                this.setState(
                    {
                      pagginationButtuns : [1,2,3,4,5] 
                    });
                break;
            case this.state.totalpages :
                this.setState(
                    {
                      pagginationButtuns : [this.state.totalpages -4,this.state.totalpages -3,this.state.totalpages -2,this.state.totalpages -1,this.state.totalpages] 
                    });
                break;
            case this.state.totalpages -1 :
                this.setState(
                    {
                      pagginationButtuns : [this.state.totalpages -4,this.state.totalpages -3,this.state.totalpages -2,this.state.totalpages -1,this.state.totalpages ] 
                    });
                break;
            case this.state.totalpages -2 :
                this.setState(
                     {
                      pagginationButtuns : [this.state.totalpages -4,this.state.totalpages -3,this.state.totalpages -2,this.state.totalpages -1,this.state.totalpages ] 
                    });
                break;
            default:
                this.setState(
                    {
                     pagginationButtuns : [this.state.currentPage-2,this.state.currentPage-1,this.state.currentPage,this.state.currentPage+1,this.state.currentPage+2] 
                   });
        }
            
    } 

    toggle = () => 
    {
        this.state.clicked === 0? this.setState({clicked : 1}) : this.setState({clicked : 0})
    }

    nextPage = () => {
        const mythis = this
        async function plusplus() {
            mythis.setState( prev => {
                let tmp = mythis.state.currentPage;
                tmp++
                return{
                    currentPage :tmp
                }
            });
            return 1;
          };
        if(this.state.currentPage != this.state.totalpages )
        {
            plusplus().then( () => this.pagination(this.state.currentPage))
        }
    }

    previousPage = () => {
        const mythis = this
        async function backback() {
            mythis.setState( prev => {
                let tmp = mythis.state.currentPage;
                tmp--
                return{
                    currentPage :tmp
                }
            });
            return 1;
          };
        if(this.state.currentPage != 1 )
        {
            backback().then( () => this.pagination(this.state.currentPage))
        }
    }

    update = (e , info) => {
        e.preventDefault();
        console.log(info);
    }

    render(){
        if (this.props.authorized != 2 )
        {
            alert("Ur not Authorized");
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
                             {this.state.neededItems.map( i =>  {
                                    return (
                                <div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp delay-07s"> 
                                <article className="post">
                                    <div className="post-img">
                                        <img alt="" className="img-responsive" src={i.image} />
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="" title="#">{i.titre}</a>
                                        </h3>
                                        <p className="post-description">{i.description}</p>
                                        <a className="read-more" href="" onClick={(e) => this.update(e , i)}> UPDATE</a>
                                        <br/>
                                        <br/>
                                        <a className="read-more" href="">DELETE</a>
                                    </div>
                                </article>
                            </div>
                                    )
                                })}
                            {/*====  End of Section Blog  ====*/}
                            </div>
                            <div className="text-center">
                            <div className="pagination">
                                <a onClick={this.previousPage}>«</a>
                                {
                                    this.state.pagginationButtuns.map( i  => {
                                        return(
                                            this.state.currentPage === i ? <a className="active" value={i} onClick= {() => this.pagination(i)}>{i}</a> : <a value={i} onClick= {() => this.pagination(i)}>{i}</a>
                                        );
                                    })
                                }
                                <a onClick={this.nextPage}>»</a>
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
                                    <a onClick={this.toggle}>CLICK TO ADD</a>
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