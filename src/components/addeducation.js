import React, { Component } from "react";

class AddEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (            
            <div className="AddEducation" id={this.props.id}>                
                <input placeholder="Título obtenido" onChange={this.props.change} name="degree" id={this.props.id}></input>
                <input placeholder="Nombre de la escuela" onChange={this.props.change} name="school" id={this.props.id}></input>
                <input placeholder="Información adicional" onChange={this.props.change} name="addinfo" id={this.props.id}></input>
                <input placeholder="Fechas" onChange={this.props.change} name="date" id={this.props.id}></input>
                <button onClick={this.props.delete}>Eliminar</button>
            </div>
          );
    }  
};

export default AddEducation;