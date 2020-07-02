import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sara', age: 23, id: '1234'},
      {name: 'Anna', age: 24, id: '2345'},
      {name: 'Laura', age: 31, id: '3456'}
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons })
  }
  

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); this is another way to create a new array
    const person = [...this.state.persons];  
    person.splice(personIndex, 1);
    this.setState({persons: person})
  }



  render() {
    let persons = null;

    if ( this.state.showPerson ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            remove={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
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
