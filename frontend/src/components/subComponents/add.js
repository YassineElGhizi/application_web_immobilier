import React from 'react';

export default class Add extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            titre : "",
            address : "",
            surface : "",
            type : "",
            Status : "",
            image : "",
            chambre : "",
            salleBain : "",
            garage : ""
        };
      }

    render(){
        return(
            <div>
                <label htmlFor="">Genral Information</label>
                                    <input type="text" className="form-control input-lg" placeholder="Titre"/>
                                    <br/>
                                    <textarea type="text" className="form-control input-lg" placeholder="Address"/>
                                    <br/>
                                    <input type="number" className="form-control input-lg" placeholder="Surface m2"/>
                                    <br/>
                                    <select className="form-control chosen-select" data-placeholder="property type" id="property-type">
                                        <option value="#">
                                        Type de propriété
                                        </option>
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
                                    <br/>
                                    <select className="form-control chosen-select" data-placeholder="Property Status" id="property-status">
                                        <option value="#">
                                        Statut de la propriété
                                        </option>
                                        <option value="0">
                                        à Vendre
                                        </option>
                                        <option value="1">
                                        à Louer
                                        </option>
                                    </select>
                                    <br/>
                                    <textarea type="text" className="form-control input-lg" placeholder="Description"/>
                                    <br/>
                                    <label htmlFor="">Image</label>
                                    <input type="file" className="form-control input-lg" placeholder="Surface m2"/>
                                    <br/>
                                    <label htmlFor="">Facilities</label>
                                    <input type="number" className="form-control input-lg" placeholder="nombre du chambres"/>
                                    <br/>
                                    <input type="number" className="form-control input-lg" placeholder="nombre du salle de bains"/>
                                    <br/>
                                    <input type="number" className="form-control input-lg" placeholder="nombre du salle des Garage"/>
                                    <a className="btn button-sm button-theme" style={{marginLeft: '10vw' , marginTop : '2vw'}}>
                                            Validate
                                    </a>
            </div>
        );
    }
}