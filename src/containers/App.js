import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

import '../stylesheet/App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        {this.props.counter}
        <button onClick={() => this.props.onIncrement(1)}>
          ปุ่มบวกนะจ๊ะ กดเลย
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({  
  counter: state.counters || 0
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (num) => dispatch(increment(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
