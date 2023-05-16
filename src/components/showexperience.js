import React, { Component } from "react";

class ShowExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div>
                <p>{this.props.expitem.position}</p>
                <p>{this.props.expitem.company}</p>
                <p>{this.props.expitem.responsibilities}</p>
                <p>{this.props.expitem.date}</p>
            </div>
        );
    }
  
};

export default ShowExperience;