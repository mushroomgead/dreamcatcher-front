import * as React from 'react';
import { Routes } from '../routers';
import '../stylesheet/index.css';
import '../utility/fontAwesome';

class App extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 1000, position: 'relative', margin: '0 auto' }}>
        <Routes />
      </div>
    );
  }
}

export default App;
