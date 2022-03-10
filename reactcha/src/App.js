import React from 'react'
import logo from './logo.svg';
import './App.css';
import BasicInfo from './BasicInfo.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= [{
      person:{ 
      name: "Giselle", dob: "02-10-1997", PhoneNumber: 7042015032}
    , person2:{
      name: "Teresa", dob: "09-18-2003", PhoneNumber: 9803119080}
    , person3:{
      name: "Harold", dob: "12-06-2001", PhoneNumber: 7043189564}
    }]
  }
  render() {
    return( 
      <>
    <BasicInfo name={this.state.person.name} dob={this.state.person.dob} PhoneNumber ={this.state.person.PhoneNumber}/>
    </>
    )
}

}

export default App;
