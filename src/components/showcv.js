import React, { Component } from "react";
import ShowEducation from "./showeducation";
import ShowExperience from "./showexperience"

class ShowCV extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        }

    render(){
        const educationList = this.props.state.education.map((eduitem) => {
            return <ShowEducation key={eduitem.id} eduitem={eduitem}/>
        })
        const experienceList = this.props.state.experience.map((expitem) => {
            return <ShowExperience key={expitem.id} expitem={expitem}/>
        })
        return (
            <div className="showcv">
                <header className="showcvheader">
                    <h1>{this.props.state.personalinfo.name}</h1>
                    <h2>{this.props.state.personalinfo.profession}</h2>
                </header>
                <main className="showcvmain">
                    <section>
                        <h3>Sobre mí</h3>
                        <p>{this.props.state.personalinfo.aboutme}</p>
                    </section>
                    <section>
                        <h3>Educación</h3>
                        {educationList}
                    </section>
                    <section>
                        <h3>Experiencia</h3>
                        {experienceList}
                    </section>
                </main>
                <aside className="showcvaside">
                    <img src="#" alt="#"></img>
                    <div className="info">
                        <h3>Información Personal</h3>
                        <div className="datos">
                            <h4>Correo electrónico</h4>
                            <p>{this.props.state.personalinfo.email}</p>
                        </div>
                        <div className="datos">
                            <h4>Teléfono</h4>
                            <p>{this.props.state.personalinfo.phone}</p>
                        </div>
                        <div className="datos">
                            <h4>Dirección</h4>
                            <p>{this.props.state.personalinfo.address}</p>
                        </div>
                    </div>
                </aside>
            </div>
          );
    }
  
};

export default ShowCV;