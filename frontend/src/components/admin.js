import React from 'react';
import {
    Redirect,
  } from "react-router-dom";

export default class Admin extends React.Component
{
    render(){
        if (this.props.authorized != 1 )
        {
            alert("admin.js : Ur not Authorized");
            return <Redirect to="/login" />
        }
        return(
            <div>
                Admin
            </div>
        );
    }
}
