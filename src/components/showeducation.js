import React, { Component } from "react";

class ShowEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }   

    render(){
        return (
            <section className="showedu">
                <p className="date">{this.props.eduitem.date}</p>
                <p>{this.props.eduitem.degree}</p>
                <p>{this.props.eduitem.school}</p>
                <p>{this.props.eduitem.addinfo}</p>                
            </section>
        );
    }
  
};

export default ShowEducation;