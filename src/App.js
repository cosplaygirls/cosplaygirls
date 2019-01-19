import React, { Component } from 'react';
import styles from './App.module.css';
import cosplaygirls from './cosplaygirls.json';

class App extends Component {
  render() {
    console.log(cosplaygirls);
    return (
      <ul>
        {cosplaygirls.map(girl => (
          <li>{girl.nickname}</li>
        ))}
      </ul>
    );
  }
}

export default App;
