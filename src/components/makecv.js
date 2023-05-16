import React, { Component } from "react";

class MakeCV extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        // this.newEducation = this.newEducation.bind(this);
        // this.deleteEducation = this.deleteEducation.bind(this);
        /* this.newExperience = this.newExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this); */
    }


    /* newEducation(){
        const newkey = uniqid();
        const copy = [<AddEducation key={newkey} delete={this.deleteEducation} id={newkey}/>];
        this.setState({edulist: this.state.edulist.concat(copy)});
    } */

    /* newExperience(){
        const newkey = uniqid();
        const copy = [<AddExperience key={newkey} delete={this.deleteExperience} id={newkey}/>];
        this.setState({explist: this.state.explist.concat(copy)});
    }  */

    /* deleteEducation(e){
        const id = e.target.parentElement.id;
        this.setState({edulist: this.state.edulist.filter(i => i.key !== id)});
    }
 */
    /* deleteExperience(e){
        const id = e.target.parentElement.id;
        this.setState({explist: this.state.explist.filter(i => i.key !== id)});
    }      */
    
    render(){
        return (
            <div className="makecv">
                <section className="personalinfo">
                    <h2>Información Personal</h2>
                    <input type="text" placeholder="Nombre" id="name" onChange={this.props.change}></input>
                    <input type="text" placeholder="Profesión" id="profession" onChange={this.props.change}></input>
                    <label className="inputfile">Subir foto<input type="file" id="picture" onChange={this.props.change}></input></label>
                    <input type="email" placeholder="Correo electrónico" id="email" onChange={this.props.change}></input>
                    <input type="tel" placeholder="Teléfono" id="phone" onChange={this.props.change}></input>
                    <input type="text" placeholder="Dirección" id="address" onChange={this.props.change}></input>
                    <textarea placeholder="Sobre mí" id="aboutme" onChange={this.props.change}></textarea>
                </section>
                
                <section className="personalinfo">
                    <h2>Educación</h2>
                    {this.props.state.edulist}            
                    <button onClick={async()=>{
                        await this.props.newedu();
                        this.setState({edulist: this.props.state.edulist})                
                        }}>Agregar Educación</button>
                </section>                

                <section className="personalinfo">
                    <h2>Experiencia</h2>
                    {this.props.state.explist}  
                    <button onClick={async()=>{
                        await this.props.newexp();
                        this.setState({explist: this.props.state.explist})                
                        }}>Agregar Experiencia</button>
                </section>
                
            </div>
        );
    }
  
};

export default MakeCV;