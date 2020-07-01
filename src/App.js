import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Pattern from './Patterns/Pattern';
import Welcome from './Welcome/Welcome';

class App extends Component {
  state = {
    persons: [
      {name: 'Sara', age: 23},
      {name: 'Anna', age: 24},
      {name: 'Laura', age: 31},
    ],
    login: [
      {title: 'Guest'}
    ],
    bookInfo: [
      {titleBook: 'Home made Gifts in Variety', 
        volume: 'Needlecraft Volume VII Number 4',
        published: 'December 1915 Augusta, Maine:  NeedleCraft Publishing',
        item:'Tatted calling-card case' },
        {titleBook: 'Tatting', 
        volume: 'Needlecraft Volume 1',
        published: 'December 1920 Augusta, Maine:  NeedleCraft Publishing',
        item:'Flower' }
    ]
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

  loginHandler = (event) => {
    this.setState({
      login: [
        {title: event.target.value}
      ]
    })
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
          <h1 className="App-title">Retro Patterns</h1>
          
        </header>

        <Welcome
        loginName = {this.loginHandler}
        name={this.state.login[0].title}
        ></Welcome>

        <Pattern
                titleBook={this.state.bookInfo[0].titleBook}
                volume={this.state.bookInfo[0].volume}
                published={this.state.bookInfo[0].published}
                item={this.state.bookInfo[0].item}

/>
<Pattern
                titleBook={this.state.bookInfo[1].titleBook}
                volume={this.state.bookInfo[1].volume}
                published={this.state.bookInfo[1].published}
                item={this.state.bookInfo[1].item}

/>
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
