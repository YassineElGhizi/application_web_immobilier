import React from 'react';
import {
    Redirect,
  } from "react-router-dom";

export default class Publisher extends React.Component
{
    render(){
        if (this.props.authorized != 2 )
        {
            alert("publisher.js :Ur not Authorized");
            alert(this.props.authorized)
            return <Redirect to="/login" />
        }
        return(
            <div>
                User
            </div>
        );
    }
} 