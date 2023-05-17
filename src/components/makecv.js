import React, { Component } from "react";

class MakeCV extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div className="makecv">
                <section className="personalinfo">
                    <h2>Información Personal</h2>
                    <input type="text" placeholder="Nombre" id="name" onChange={this.props.change}></input>
                    <input type="text" placeholder="Profesión" id="profession" onChange={this.props.change}></input>
                    
                    <label className="inputfile">Subir foto
                    <input type="file" id="picture" name="picture" accept="image/*" onChange={this.props.handleChangeImage}></input>
                    </label>
                    
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
                
                <section className="personalinfo">
                    <h2>Habilidades</h2>
                    {this.props.state.skilllist}  
                    <button onClick={async()=>{
                        await this.props.newski();
                        this.setState({skilist: this.props.state.skilist})                
                        }}>Agregar Hablilidad</button>
                </section>
            </div>
        );
    }
  
};

export default MakeCV;