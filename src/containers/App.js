import * as React from 'react';
import { Routes } from '../routers';
import '../stylesheet/index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}

export default App;
