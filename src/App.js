import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sara', age: 23},
      {name: 'Anna', age: 24},
      {name: 'Laura', age: 31},
    ],
    showPerson: false,
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow});
  }




  render() {
    let persons = null;

    if ( this.state.showPerson ) {
      persons = (
        <div>
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
      )
    }


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
          <h1 className="App-title">React Practice</h1>
          
        </header>
     {/*    This way of passing references is less efficient */}
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Show Name</button> 
  
       {persons}
      </div>
    );
  }
}

export default App;
