import React, { Component } from "react";

class ShowExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <section className="showexp">
                <p className="date">{this.props.expitem.date}</p>
                <p>{this.props.expitem.position}</p>
                <p>{this.props.expitem.company}</p>
                <p>{this.props.expitem.responsibilities}</p>
                
            </section>
        );
    }
  
};

export default ShowExperience;