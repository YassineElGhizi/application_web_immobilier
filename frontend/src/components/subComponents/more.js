import React from 'react';


export default class More extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            ready : false
        };
    }

    render(){
        return(
            <div>
                <div style={{width: '75%' , marginLeft : '10%' , marginTop : '2vw'}}>
                    <h2>
                        Contacter l'Editeur d'offre : {this.props.name}.
                        <br/>
                        Voila son numero : {this.props.tel}
                        <br/>
                        <img 
                            style={{width: '25%' ,height : '25%', marginLeft : '25%'}} 
                            src={this.props.image} 
                        />
                    </h2>
                </div>
            </div>
        );
    }
}