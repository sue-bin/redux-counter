import React, { Component } from 'react';
import './App.css';

import Counter from './Counter';
import Button from './Button';
import Option from './Option';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Option />
        <Button />
      </div>
    );
  }
}

export default App;
