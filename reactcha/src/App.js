import React from 'react'
import './App.css';
import BasicInfo from "./BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [
        {
          name: "Giselle",
          dob: "02-10-1997",
          phoneNumber: 7042015032,
          ative: true,
        },
        {
          name: "Teresa",
          dob: "09-18-2003",
          phoneNumber: 9803119080,
          ative: true,
        },
        {
          name: "Alec",
          dob: "12-06-2001",
          phoneNumber: 7043189564,
          ative: true,
      },
    ],
  };
}
toggle=(num)=>{
  //copy of state
    const currentState = { ...this.state };
    //pull the people
    const { person } = currentState;
    //using the parameter num we know what person went active or not active
    person[num].active = !person[num].active;
    //now that we know that we can update our state to know what happen
    this.setState(currentState);
  };
  render() {
    //destrcuture
    const { person } = this.state;
    const mappedPerson= person.map((person, index) => {
      return (
        <BasicInfo
          key={index}
          //this is telling react were to start looking
          name={person.name}
          dob={person.dob}
          phoneNumber={person.phoneNumber}
          toggleFunc={this.toggle}
          num={index}
          active={person.active}
        />
      );
    });
    return <>{mappedPerson}</>;
  }
};
export default App;

