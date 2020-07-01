import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Sara', age: 23},
      {name: 'Anna', age: 24},
      {name: 'Laura', age: 31},
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //DON'T DO IT LIKE THIS: this.state.persons[0].name = 'Jill';
    setPersonsState({
      persons: [
        {name: 'Milley', age: 23},
        {name: 'Anna', age: 24},
        {name: 'Laura', age: 30},
      ],
    })
  };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First React App</h1>
        </header>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is sewing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}

export default app;
