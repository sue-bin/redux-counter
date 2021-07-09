import React, { Component } from 'react';
import './App.css';

import Counter from './Counter';
import Button from './Button';
import Option from './Option';

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={this.props.store} />
        <Option store={this.props.store} />
        <Button store={this.props.store} />
      </div>
    );
  }
}

export default App;
