import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

import '../stylesheet/App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        {this.props.counter}
        <button onClick={() => this.props.dispatch(increment(1))}>
          ปุ่มบวกนะจ๊ะ กดเลย
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'satte');
  
  return {
    counter: state.counters || 0
  }
}

export default connect(mapStateToProps)(App);
