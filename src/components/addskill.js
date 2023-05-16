import React, { Component } from "react";

class AddSkill extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (            
            <div className="AddSkill" id={this.props.id}>                
                <input placeholder="Habilidad" onChange={this.props.change} name="skill" id={this.props.id}></input>
                <button onClick={this.props.delete}>Eliminar</button>
            </div>
          );
    }  
};

export default AddSkill;