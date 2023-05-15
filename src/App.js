import React, { Component } from 'react';
import MakeCV from "./components/makecv";
import ShowCV from "./components/showcv";
import './App.css'
import uniqid from 'uniqid';
import AddEducation from './components/addeducation'
import AddExperience from './components/addexperience'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edulist: [],
      explist: [],
      personalinfo: {
        name: "",
        profession: "",
        picture: "",
        email: "",
        phone: "",
        address: "",
        aboutme: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.newEducation = this.newEducation.bind(this);
    this.showEducation = this.showEducation.bind(this);
    this.newExperience = this.newExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  showEducation(){

  }

  newEducation(){
    const newkey = uniqid();
    const copy = [<AddEducation key={newkey} delete={this.deleteEducation} id={newkey}/>];
    this.setState({edulist: this.state.edulist.concat(copy)})      
  } 

  deleteEducation(e){
    const id = e.target.parentElement.id;
    this.setState({edulist: this.state.edulist.filter(i => i.key !== id)});
  } 

  newExperience(){
    const newkey = uniqid();
    const copy = [<AddExperience key={newkey} delete={this.deleteExperience} id={newkey}/>];
    this.setState({explist: this.state.explist.concat(copy)})      
  } 

  deleteExperience(e){
    const id = e.target.parentElement.id;
    this.setState({explist: this.state.explist.filter(i => i.key !== id)});
  } 

  handleChange = (e) => {
    this.setState({
      personalinfo: {
        ...this.state.personalinfo,
        [e.target.id]: e.target.value,
      },
    });
  };

  render(){
    return (
      <div className="App">
        <header className='header'><h1>Crea tu CV</h1></header>
        <main className='main'>
          <MakeCV change={this.handleChange} newedu={this.newEducation} state={this.state} newexp={this.newExperience}/>
          <ShowCV state={this.state}/>
        </main>
        <footer>luiseseberre2023</footer>
      </div>
    );
  }
  
}

export default App;
