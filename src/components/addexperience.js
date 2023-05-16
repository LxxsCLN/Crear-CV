import React, { Component } from "react";

class AddExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        }

    render(){
        return (
            <div className="AddExperience" id={this.props.id}>
                <input placeholder="Puesto" onChange={this.props.change} name="position" id={this.props.id}></input>
                <input placeholder="Empresa" onChange={this.props.change} name="company" id={this.props.id}></input>
                <input placeholder="Responsabilidades" onChange={this.props.change} name="responsibilities" id={this.props.id}></input>
                <input placeholder="Fechas" onChange={this.props.change} name="date" id={this.props.id}></input>
                <button onClick={this.props.delete}>Eliminar</button>
            </div>
          );
    }
  
};

export default AddExperience;