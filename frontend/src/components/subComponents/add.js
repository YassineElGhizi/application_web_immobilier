import React from 'react';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import { storage } from "./firebaseStorage";


export default class Add extends React.Component
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
            storagePath : "",
        };
        this.validator = new SimpleReactValidator();

      }

      change = (e , p) => 
      {
          switch (p)
          {
              case 0 :
                  this.setState(
                      {
                        titre : e.target.value 
                      }
                      );
                  break; 
              case 1 :
                  this.setState(
                      {
                        address : e.target.value 
                      }
                      );
                  break; 
              case 2:
                  this.setState(
                      {
                        surface : e.target.value 
                      }
                      );
                  break;
              case 3:
                  this.setState(
                      {
                        type : e.target.value 
                      }
                      );
                  break; 
              case 4:
                  this.setState(
                      {
                        Status : e.target.value 
                      }
                      );
                  break;
               case 5:
                    this.setState(
                        {
                            description : e.target.value 
                        }
                        );
                    break; 
                case 6:
                    this.setState(
                        {
                            image : e.target.files[0]
                        }
                        );
                    break;     
                case 7:
                    this.setState(
                    {
                        chambre : e.target.value 
                    }
                    );
                break; 
                case 8:
                    this.setState(
                    {
                        salleBain : e.target.value 
                    }
                    );
                break; 
                case 9:
                    this.setState(
                    {
                        garage : e.target.value 
                    }
                    );
                break; 
                case 10:
                    this.setState(
                    {
                        price : e.target.value 
                    }
                    );
                break; 
          }
      }

      click = (e) => 
      {
          e.preventDefault();
        //   let n = Math.random();
          let n = "";
          n = new Date();
          const uploadTask = storage.ref(`houses/${n}`).put(this.state.image).then( (e) => {
            storage.ref(`houses/${n}`).getDownloadURL().then((res) => {
                console.log(res);
                // urlsaver = {[arr[i]]: res}
                // saver[i] = urlsaver;
                // this.setState({Url: saver, isRetrieved: true})
            });

        })


          if (this.validator.allValid()) 
          {
            // alert('You submitted the form and stuff!');
          } else 
          {
            this.validator.showMessages();
            this.forceUpdate();
          }
          let scoreCalculator = () =>
          {
            let score = 1
            // this.state.image.endsWith('png', this.state.image.length) ? score += 1 : score += 0;
              return score
          }
          console.log(this.state.image)
          let sendRequest = () =>
          {
              axios.post('http://127.0.0.1:8000/add', {
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
                  id : this.props.id,
                  price : this.state.price,
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  alert(error);
                });
          }
          scoreCalculator() ===  1 ?sendRequest() : alert('SomeThing Wrong !!')
      }

    render(){
        return(
            <div>
                <label htmlFor="">Genral Information</label>
                                    <input onChange={(e) => this.change(e , 0)} type="text" className="form-control input-lg" placeholder="Titre"/>
                                    {this.validator.message('Titre', this.state.titre, 'required')}
                                    <br/>
                                    <textarea onChange={(e) => this.change(e , 1)} type="text" className="form-control input-lg" placeholder="Address"/>
                                    {this.validator.message('Titre', this.state.address, 'required')}
                                    <br/>
                                    <input onChange={(e) => this.change(e , 2)} type="number" className="form-control input-lg" placeholder="Surface m2"/>
                                    {this.validator.message('Titre', this.state.surface, 'required')}
                                    <br/>
                                    <select onChange={(e) => this.change(e , 3)} className="form-control chosen-select" data-placeholder="property type" id="property-type">
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
                                    <select onChange={(e) => this.change(e , 4)} className="form-control chosen-select" data-placeholder="Property Status" id="property-status">
                                        <option value="0">
                                        à Vendre
                                        </option>
                                        <option value="1">
                                        à Louer
                                        </option>
                                    </select>
                                    <br/>
                                    <textarea onChange={(e) => this.change(e , 5)} type="text" className="form-control input-lg" placeholder="Description"/>
                                    <br/>
                                    <label htmlFor="">Image</label>
                                    <input accept="image/*" onChange={(e) => this.change(e , 6)} type="file" className="form-control input-lg" placeholder="Surface m2"/>
                                    <br/>
                                    <label htmlFor="">Facilities</label>
                                    <input onChange={(e) => this.change(e , 7)} type="number" className="form-control input-lg" placeholder="nombre du chambres"/>
                                    {this.validator.message('Titre', this.state.chambre, 'required')}
                                    <br/>
                                    <input onChange={(e) => this.change(e , 8)} type="number" className="form-control input-lg" placeholder="nombre du salle de bains"/>
                                    {this.validator.message('Titre', this.state.salleBain, 'required')}
                                    <br/>
                                    <input onChange={(e) => this.change(e , 9)} type="number" className="form-control input-lg" placeholder="nombre du salle des Garage"/>
                                    <br/>
                                    {this.validator.message('Titre', this.state.garage, 'required')}
                                    <input onChange={(e) => this.change(e , 10)} type="number" className="form-control input-lg" placeholder="Prix"/>
                                    {this.validator.message('Titre', this.state.price, 'required')}
                                    <a onClick={this.click}  className="btn button-sm button-theme" style={{marginLeft: '10vw' , marginTop : '2vw'}}>
                                            Validate
                                    </a>
            </div>
        );
    }
}