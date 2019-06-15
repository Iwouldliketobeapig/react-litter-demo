import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'less':
      return state - 1;
    default: 
      return state;
  }
}
const store = createStore(
  reducer, 
  compose(
    applyMiddleware(logger),
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;