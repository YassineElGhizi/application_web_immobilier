import React from 'react';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import { storage } from "./firebaseStorage";
import ProgressBar from "@ramonak/react-progress-bar";
import Swal from 'sweetalert2';



export default class Update extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            titre : "",
            address : "",
            surface : "",
            type : "0",
            Status : "0",
            description : "",
            image : "",
            chambre : "",
            salleBain : "",
            garage : "",
            price : "",
            uploading : 0,
            progress : 0,
            id : 0,
            facility_id : 0,
            user_id : 0,
            propriety_id : 0,
        };
        this.validator = new SimpleReactValidator();
      }

      componentDidMount()
      {
          const mythis = this;
        let tmp =  JSON.parse(localStorage.getItem('UpdateTareget'));
        axios.post('http://127.0.0.1:8000/getfacilitydetailles', {facility_id: tmp.facility_id})
        .then(function (response) {
            console.log(response.data.id)
            mythis.setState({
                chambre :response.data.room,
                salleBain :response.data.bathroom,
                garage :response.data.garage,                
            })
        }).catch(function (error) {alert(error);});
        
        async function stateUpdater(tmp)
        {
            mythis.setState({
                titre : tmp.titre,
                address :tmp.address,
                surface :tmp.surface,
                type : tmp.type,
                Status : tmp.status,
                description :tmp.description,
                image :tmp.image,
                facility_id : tmp.facility_id,
                price :tmp.price,
                id : tmp.id,
                user_id : tmp.user_id,
                propriety_id : tmp.id,
            })
        }
        stateUpdater(tmp);

      }

      change = (e , p) => 
      {
          switch (p)
          {
              case 0 :
                  this.setState({titre : e.target.value});
                  break; 
              case 1 :
                  this.setState({address : e.target.value });
                  break; 
              case 2:
                  this.setState({surface : e.target.value });
                  break;
              case 3:
                  this.setState({type : e.target.value });
                  break; 
              case 4:
                  this.setState({Status : e.target.value });
                  break;
               case 5:
                    this.setState({description : e.target.value});
                    break; 
                case 6:
                    this.setState({image : e.target.files[0]})
                    break;     
                case 7:
                    this.setState({chambre : e.target.value });
                break; 
                case 8:
                    this.setState({salleBain : e.target.value });
                break; 
                case 9:
                    this.setState( {garage : e.target.value });
                break; 
                case 10:
                    this.setState({price : e.target.value });
                break; 
          }
      }

      click = (e) => 
      {
          e.preventDefault();
          let uploadPictureAndSendRequest =() =>
          {          
              let n = "";
                n = new Date();
                this.setState({uploading : 1})
                this.setState({progress : 20})
                const uploadTask = storage.ref(`houses/${n}`).put(this.state.image).then( (e) => {
                    storage.ref(`houses/${n}`).getDownloadURL().then((res) => {
                        console.log(res);
                        this.setState({image : res})
                        this.setState({progress : 70})
                    }).then( () => sendRequest());
                    this.setState({progress : 99})
                    this.setState({uploading : 0})
                    this.setState({progress : 0})
        })}

          if (this.validator.allValid()) 
          {
            // alert('You submitted the form and stuff!');
          } else 
          {
            this.validator.showMessages();
            this.forceUpdate();
          }

          let sendRequest = () =>
          {
              axios.post('http://127.0.0.1:8000/update', {
                  titre : this.state.titre,
                  address : this.state.address,
                  surface : this.state.surface,
                  type : this.state.type,
                  Status : this.state.Status,
                  description : this.state.description,
                  image : this.state.image,
                  chambre : this.state.chambre,
                  salleBain : this.state.salleBain,
                  garage : this.state.garage,
                  propriety_id : this.state.propriety_id,
                  price : this.state.price,
                  facility_id : this.state.facility_id

                })
                .then(function (response) {
                  console.log(response);
                  Swal.fire(  
                    'DONE!',
                    'Information Stored',
                    'success')
                    
                })
                .catch(function (error) {
                  alert(error);
                });
          }
          typeof this.state.image != "object"? sendRequest() : uploadPictureAndSendRequest()
      }

    render(){
        return(
            <div>
                <label htmlFor="">Genral Information</label>
                                    <input value={this.state.titre} onChange={(e) => this.change(e , 0)} type="text" className="form-control input-lg" placeholder="Titre"/>
                                    {this.validator.message('Titre', this.state.titre, 'required')}
                                    <br/>
                                    <textarea value={this.state.address} onChange={(e) => this.change(e , 1)} type="text" className="form-control input-lg" placeholder="Address"/>
                                    {this.validator.message('Titre', this.state.address, 'required')}
                                    <br/>
                                    <input value={this.state.surface} onChange={(e) => this.change(e , 2)} type="number" className="form-control input-lg" placeholder="Surface m2"/>
                                    {this.validator.message('Titre', this.state.surface, 'required')}
                                    <br/>
                                    <select value={this.state.type} onChange={(e) => this.change(e , 3)} className="form-control chosen-select" data-placeholder="property type" id="property-type">
                                        <option value="0">Appartment</option>
                                        <option value="1">Maisons</option>
                                        <option value="2">Commerciale</option>
                                        <option value="3">Garage</option>
                                    </select>                                
                                    <br/>
                                    <select value={this.state.Status} onChange={(e) => this.change(e , 4)} className="form-control chosen-select" data-placeholder="Property Status" id="property-status">
                                        <option value="0">à Vendre</option>
                                        <option value="1">à Louer</option>
                                    </select>
                                    <br/>
                                    <textarea value={this.state.description} onChange={(e) => this.change(e , 5)} type="text" className="form-control input-lg" placeholder="Description"/>
                                    <br/>
                                    <label htmlFor="">Image</label>
                                    <img src={this.state.image} alt=""/>
                                    <input  accept="image/png" onChange={(e) => this.change(e , 6)} type="file" className="form-control input-lg" placeholder="Surface m2"/>
                                    <br/>
                                    <label htmlFor="">Facilities</label>
                                    <input value={this.state.chambre} onChange={(e) => this.change(e , 7)} type="number" className="form-control input-lg" placeholder="nombre du chambres"/>
                                    {this.validator.message('Titre', this.state.chambre, 'required')}
                                    <br/>
                                    <input value={this.state.salleBain} onChange={(e) => this.change(e , 8)} type="number" className="form-control input-lg" placeholder="nombre du salle de bains"/>
                                    {this.validator.message('Titre', this.state.salleBain, 'required')}
                                    <br/>
                                    <input value={this.state.garage} onChange={(e) => this.change(e , 9)} type="number" className="form-control input-lg" placeholder="nombre des Garage"/>
                                    <br/>
                                    {this.validator.message('Titre', this.state.garage, 'required')}
                                    <input value={this.state.price} onChange={(e) => this.change(e , 10)} type="number" className="form-control input-lg" placeholder="Prix"/>
                                    {this.validator.message('Titre', this.state.price, 'required')}
                                    <a onClick={this.click}  className="btn button-sm button-theme" style={{marginLeft: '10vw' , marginTop : '2vw'}}>
                                            Update
                                    </a>
                                    <br/>
                                    <br/>
                                    { this.state.uploading ? <ProgressBar completed={this.state.progress}/> : <br/> }
            </div>
        );
    }
}