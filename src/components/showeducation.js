import React, { Component } from "react";

class ShowEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }   

    render(){
        return (
            <div>
                <p>{this.props.eduitem.degree}</p>
                <p>{this.props.eduitem.school}</p>
                <p>{this.props.eduitem.addinfo}</p>
                <p>{this.props.eduitem.date}</p>
            </div>
        );
    }
  
};

export default ShowEducation;