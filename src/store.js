import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


const getMiddleware = () => {
  console.log(`Working on: ${process.env.NODE_ENV}`)
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware();
  } else {
    return applyMiddleware(createLogger());
  }
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));

