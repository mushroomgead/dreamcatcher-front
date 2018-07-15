import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger))

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
