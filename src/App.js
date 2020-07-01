import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sara', age: 23},
      {name: 'Anna', age: 24},
      {name: 'Laura', age: 31},
    ],
    otherState: 'other value'
  }

  switchNameHandler = (newName) => {
    //DON'T DO IT LIKE THIS: this.state.persons[0].name = 'Jill';
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Anna', age: 24},
        {name: 'Laura', age: 30},
      ],
    } )
    //console.log('Was clicked!');
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Britany', age: 23},
        {name: 'Anna', age: 24},
        {name: event.target.value, age: 30},
      ],
    } )
  }

  render() {
    const style ={
      backgroundColor: 'black',
      font: 'inherit',
      border: '1px solid yellow',
      borderRadius: '5px',
      padding: '8px',
      color: '#fff',
      marginTop: '16px',
      curser: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First React App</h1>
        </header>

     {/*    This way of passing references is less efficient */}
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Amy')}>Switch Name</button> 
       
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        change={this.switchNameHandler.bind(this, 'Lucy')}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>My hobby is sewing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
