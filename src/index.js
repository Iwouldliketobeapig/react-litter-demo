import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './store';
import React from 'react';
import { Provider,  } from 'react-redux';
import 'normalize.css';
import 'src/component/style/common.scss';

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);