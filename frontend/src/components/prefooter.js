import { render } from '@testing-library/react';
import React from 'react';

export default class Prefooter extends React.Component
{
    render(){
        return(
            <div>
                <div className="bg-theme call-to-actions pdt40 pdbt40">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="text-call-us">
                            <h3>
                            Vous souhaitez louer ou vendre votre propriété
                            </h3>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="call-us text-right">
                            <a className="booking" href="#">
                            Creer un compte
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}