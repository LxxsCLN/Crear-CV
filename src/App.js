import React, { Component } from 'react';
import MakeCV from "./components/makecv";
import ShowCV from "./components/showcv";
import './App.css'
import uniqid from 'uniqid';
import AddEducation from './components/addeducation'
import AddExperience from './components/addexperience'
import AddSkill from './components/addskill';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edulist: [],
      explist: [],
      skilllist: [],
      personalinfo: {
        name: "",
        profession: "",
        picture: "",
        email: "",
        phone: "",
        address: "",
        aboutme: ""
      },
      education: [
      ],
      experience: [],
      skills: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.newEducation = this.newEducation.bind(this);
    this.newExperience = this.newExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.newSkill = this.newSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  async newSkill(){
    const newkey = uniqid();

    let skiobj = {   id: newkey,  skill: "",    }
    await this.setState({skills: [...this.state.skills, skiobj]})      

    const copy = [<AddSkill key={newkey} delete={this.deleteSkill} change={this.handleChange4} state={this.state} id={newkey}/>];    
    await this.setState({skilllist: this.state.skilllist.concat(copy)})  
  }

  async deleteSkill(e){
    const id = e.target.parentElement.id;
    this.setState({skilllist: this.state.skilllist.filter(i => i.key !== id)});
    await this.setState({skills: this.state.skills.filter(i => i.id !== id)});
  } 

  async newEducation(){
    const newkey = uniqid();

    let eduobj = {   id: newkey,  degree: "",      school: "",      addinfo: "",      date: "",    }
    await this.setState({education: [...this.state.education, eduobj]})      

    const copy = [<AddEducation key={newkey} delete={this.deleteEducation} change={this.handleChange2} state={this.state} id={newkey}/>];    
    await this.setState({edulist: this.state.edulist.concat(copy)})  

  } 

  async deleteEducation(e){
    const id = e.target.parentElement.id;
    this.setState({edulist: this.state.edulist.filter(i => i.key !== id)});
    await this.setState({education: this.state.education.filter(i => i.id !== id)});
  } 

  async newExperience(){
    const newkey = uniqid();

    let expobj = {   id: newkey,  position: "",      company: "",      responsibilities: "",      date: "",    }
    await this.setState({experience: [...this.state.experience, expobj]})   

    const copy = [<AddExperience key={newkey} delete={this.deleteExperience} change={this.handleChange3} id={newkey} state={this.state}/>];
    await this.setState({explist: this.state.explist.concat(copy)})      
    console.log(this.state)
  } 

  async deleteExperience(e){
    const id = e.target.parentElement.id;
    this.setState({explist: this.state.explist.filter(i => i.key !== id)});
    await this.setState({experience: this.state.experience.filter(i => i.id !== id)});
  } 

  /* state = {
  img: logo
}

 */

  handleChangeImage = (e) => {
    this.setState({
      personalinfo: {
        ...this.state.personalinfo,
        [e.target.id]: URL.createObjectURL(e.target.files[0]),
      }})
  }

  handleChange = (e) => {
    this.setState({
      personalinfo: {
        ...this.state.personalinfo,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleChange2 = (e) => {
    const { name, value } = e.target

    this.setState((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === e.target.id) {
          return { ...educationItem, [name]: value }
        }
        return educationItem
      })
      return { ...prevState, education: [...newEducation] }
    })
    console.log(this.state)
  }

  handleChange3 = (e) => {
    const { name, value } = e.target

    this.setState((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === e.target.id) {
          return { ...experienceItem, [name]: value }
        }
        return experienceItem
      })
      return { ...prevState, experience: [...newExperience] }
    })
    console.log(this.state)
    
  }

  handleChange4 = (e) => {
    const { name, value } = e.target

    this.setState((prevState) => {
      const newSkill = prevState.skills.map((skillItem) => {
        if (skillItem.id === e.target.id) {
          return { ...skillItem, [name]: value }
        }
        return skillItem
      })
      return { ...prevState, skills: [...newSkill] }
    })
    console.log(this.state)
  }

  render(){
    return (
      <div className="App">
        <header className='header'><h1>Crea tu CV</h1></header>
        <main className='main'>
          <MakeCV change={this.handleChange} handleChangeImage={this.handleChangeImage} newedu={this.newEducation} state={this.state} newexp={this.newExperience} newski={this.newSkill}/>
          <ShowCV state={this.state}/>
        </main>
        <footer>luiseseberre2023</footer>
      </div>
    );
  }
  
}

export default App;
