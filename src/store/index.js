import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'less':
      return { count: state.count - 1 };
    default: 
      return state;
  }
}
const store = createStore(
  reducer, 
  compose(
    applyMiddleware(logger, ReduxThunk),
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;