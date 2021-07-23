import React from 'react';
import {
    Redirect,
  } from "react-router-dom";

import Add from './subComponents/add';
import Update from './subComponents/update';
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
            currentPage : -1,
            len : 0,
            needUpdate : 0,
            needRefrech : 0,
        };
      }
    
    refresh = () => 
    {
        this.setState({needRefrech : this.state.needRefrech +1})
    }

    componentDidUpdate(previousProps, previousState)
    {
        if (previousState.needRefrech !== this.state.needRefrech) {

            axios.post('http://127.0.0.1:8000/getall' , {
                id : this.props.id
            })
            .then( (response) => {
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
                this.pagination(this.state.currentPage)
            }).catch(function (error) {
                alert(error);
            });    
        }
    }

    componentDidMount()
    {
        this.setState({needRefrech : this.state.needRefrech})
        axios.post('http://127.0.0.1:8000/getall' , {
            id : this.props.id
        })
        .then( (response) => {
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
        const mythis = this;
        async function forceUpdate()
        {
            mythis.setState({currentPage : i})
        }
        async function preformLogic()
        {
            let s = (i*2)-2;
            let f = (i*2)-1;
            let tmp = [];
            tmp.push(mythis.state.data[s])
            if(mythis.state.data[f]){tmp.push(mythis.state.data[f])}
            mythis.setState( {neededItems : tmp})
        }
        forceUpdate().then( () => preformLogic()).then( () => switcher() )
        
        function switcher()
        {
            switch (i)
            {
              case 1 :
                  mythis.setState(
                      {
                        pagginationButtuns : [1,2,3,4,5] 
                      });
                  break;
              case 2 :
                  mythis.setState(
                      {
                        pagginationButtuns : [1,2,3,4,5] 
                      });
                  break;
              case 3 :
                  mythis.setState(
                      {
                        pagginationButtuns : [1,2,3,4,5] 
                      });
                  break;
              case mythis.state.totalpages :
                  mythis.setState(
                      {
                        pagginationButtuns : [mythis.state.totalpages -4,mythis.state.totalpages -3,mythis.state.totalpages -2,mythis.state.totalpages -1,mythis.state.totalpages] 
                      });
                  break;
              case mythis.state.totalpages -1 :
                  mythis.setState(
                      {
                        pagginationButtuns : [mythis.state.totalpages -4,mythis.state.totalpages -3,mythis.state.totalpages -2,mythis.state.totalpages -1,mythis.state.totalpages ] 
                      });
                  break;
              case mythis.state.totalpages -2 :
                  mythis.setState(
                       {
                        pagginationButtuns : [mythis.state.totalpages -4,mythis.state.totalpages -3,mythis.state.totalpages -2,mythis.state.totalpages -1,mythis.state.totalpages ] 
                      });
                  break;
              default:
                  mythis.setState(
                      {
                       pagginationButtuns : [mythis.state.currentPage-2,mythis.state.currentPage-1,mythis.state.currentPage,mythis.state.currentPage+1,mythis.state.currentPage+2] 
                     });
          }
            
        }
        // switch (i)
        //   {
        //     case 1 :
        //         this.setState(
        //             {
        //               pagginationButtuns : [1,2,3,4,5] 
        //             });
        //         break;
        //     case 2 :
        //         this.setState(
        //             {
        //               pagginationButtuns : [1,2,3,4,5] 
        //             });
        //         break;
        //     case 3 :
        //         this.setState(
        //             {
        //               pagginationButtuns : [1,2,3,4,5] 
        //             });
        //         break;
        //     case this.state.totalpages :
        //         this.setState(
        //             {
        //               pagginationButtuns : [this.state.totalpages -4,this.state.totalpages -3,this.state.totalpages -2,this.state.totalpages -1,this.state.totalpages] 
        //             });
        //         break;
        //     case this.state.totalpages -1 :
        //         this.setState(
        //             {
        //               pagginationButtuns : [this.state.totalpages -4,this.state.totalpages -3,this.state.totalpages -2,this.state.totalpages -1,this.state.totalpages ] 
        //             });
        //         break;
        //     case this.state.totalpages -2 :
        //         this.setState(
        //              {
        //               pagginationButtuns : [this.state.totalpages -4,this.state.totalpages -3,this.state.totalpages -2,this.state.totalpages -1,this.state.totalpages ] 
        //             });
        //         break;
        //     default:
        //             alert("here")
        //             alert(this.state.currentPage)
        //         this.setState(
        //             {
        //              pagginationButtuns : [this.state.currentPage-2,this.state.currentPage-1,this.state.currentPage,this.state.currentPage+1,this.state.currentPage+2] 
        //            });
        // }
            
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
        localStorage.clear();
        console.log(info)
        localStorage.setItem('UpdateTareget',JSON.stringify(info));
        this.state.needUpdate ? this.setState({needUpdate : 0}) : this.setState({needUpdate : 1})
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
                                    <h3>ADD PANEL</h3>
                                </div>
                                <div className="sidebar-body wow fadeInUp delay-07s">
                                    <div className="tag">
                                    <a onClick={this.toggle}>CLICK TO ADD</a>
                                    </div>
                                </div>
                                {this.state.clicked ? <Add id={this.props.id} refresh={this.refresh}/> : <br />}  
                                </div>
                            </div>
                            <div className="panel-body">   
                                <div className="sidebar-blog wow">
                                <div className="title">
                                    <h3>UPDATE PANEL</h3>
                                </div>
                                <div className="sidebar-body wow fadeInUp delay-07s"></div>
                                {this.state.needUpdate ? <Update refresh={this.refresh}/> : <br />}  
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