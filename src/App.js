import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { database }from './firebase'

class App extends Component {

componentDidMount() {
database.ref('/events').on('value', (snapshot) => {
  const firebaseData = Object.entries(
    snapshot.val() || {}
  );

  const data = firebaseData.map(([id, value]) => {
    value.id = id;
    return value;
  });

  // my data
  console.log(data);
    });
  }


// .push({
//   name: 'My new awesome concerto duo',
//   date: 'monday',
//   description: 'uno realmente awesome evento!!'
// }
// )


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
