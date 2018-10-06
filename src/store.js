import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware();
  }
  return applyMiddleware(createLogger());
};

export default createStore(reducer, composeWithDevTools(getMiddleware()));