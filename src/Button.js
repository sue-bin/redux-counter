import React, { Component } from 'react';
import { increment, decrement } from './actions';
import { connect } from 'react-redux';
class Button extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.onIncrement = this.onIncrement.bind(this);
  //     this.onDecrement = this.onDecrement.bind(this);
  //   }

  //   onIncrement(event) {
  //     this.props.store.dispatch(increment());
  //   }

  //   onDecrement(event) {
  //     this.props.store.dispatch(decrement());
  //   }

  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}> + </button>
        <button onClick={this.props.onDecrement}> - </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
};

Button = connect(undefined, mapDispatchToProps)(Button);

export default Button;
