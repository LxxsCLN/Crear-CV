import React, { Component } from "react";

class ShowSkill extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }   

    render(){
        return (
            <li className="showskill">
                {this.props.skiitem.skill}               
            </li>
        );
    }
  
};

export default ShowSkill;