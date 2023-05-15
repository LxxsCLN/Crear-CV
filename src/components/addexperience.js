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
                <input placeholder="Puesto"></input>
                <input placeholder="Empresa"></input>
                <input placeholder="Responsabilidades"></input>
                <button onClick={this.props.delete}>Eliminar</button>
            </div>
          );
    }
  
};

export default AddExperience;