import React, { Component } from 'react';
import { setDiff } from './actions';
import { connect } from 'react-redux';

class Option extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // bind: 인수를 this로 고정시켜줌. 원래 props 가 this 이고 props 밑에 props.onChange 를 만드는데, 이 onChange의 인수도 props 그 자체로 전달하겠다는 것.
    //onChange는 전달할 인수가 있기 때문에 react-redux 써도 안없어짐
  }

  onChange(event) {
    this.props.onUpdateDiff(parseInt(event.target.value));
  }

  render() {
    return (
      <div>
        <input value={this.props.diff} onChange={this.onChange} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    diff: state.counter.diff,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateDiff: (value) => {
      dispatch(setDiff(value));
    },
  };
};

Option = connect(mapStateToProps, mapDispatchToProps)(Option);

export default Option;
