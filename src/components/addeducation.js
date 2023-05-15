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
                <input placeholder="Título obtenido"></input>
                <input placeholder="Nombre de la escuela"></input>
                <input placeholder="Información adicional"></input>
                <button onClick={this.props.delete}>Eliminar</button>
            </div>
          );
    }
  
};

export default AddEducation;