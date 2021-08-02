import './assets/css/app.css';
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/animate.min.css';
import './assets/css/bootsnav.min.css';
import './assets/css/chosen.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/jquery.fancybox.min.css';

import Navbar from './components/navbar';
import Slider from './components/slider';
import Card from './components/card';
import Search from './components/search';
import Feature from './components/feature';
import Agent from './components/agent';
import Conseil from './components/conseil';
import Prefooter from './components/prefooter';
import Footer from './components/footer';
import View from './components/view';
import Login from './components/login';
import Register from './components/register';
import Admin from './components/admin';
import Publisher from './components/publisher';
import Result from './components/result'

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        authorized : 0,
        id:"",
        hidden : true
    };
  }

    updateAuthorization = (n) => 
    {
      this.setState({authorized : n});
    }
    
    getId = (id) =>
    {
      this.setState({id : id});
    }

    componentDidMount()
    {
      setTimeout(() => {
        this.setState({hidden: false});
      }, 1000);
    }

  render(){
  return (
    <Router>
      <div className="App">        
          <Navbar/>
          <Switch>
            <Route path="/" exact>  
              <Slider/>
              <Card />
              {this.state.hidden ? '' : <Search />}
              <Feature />
              <br/>
              <br/>
              <br/>
              <Agent />
              <Conseil />
              <Prefooter/>
            </Route>
            <Route path="/view" exact>
              <View />
            </Route>
            <Route path="/login" exact>
              <Login updateAuthorization={this.updateAuthorization} getId={this.getId}/>
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/admin" exact>
              <Admin authorized={this.state.authorized}/>
            </Route>
            <Route path="/publisher" exact>
              <Publisher authorized={this.state.authorized} id={this.state.id}/>
            </Route>
            <Route path="/result" exact>
              <Result />
            </Route>
        </Switch>
        {/* <div style={{position: 'fixed' , bottom : '0' , width : '100%'}}> */}
          <Footer/>
        {/* </div> */}
      </div>
    </Router>
  );
  }
}
