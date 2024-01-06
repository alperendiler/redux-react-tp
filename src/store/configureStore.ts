import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './rootReducer'; 
import { createStore,applyMiddleware, Middleware   } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {};


const middleware: Middleware[] = [thunk];

export function configureStore() {


  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  
    const store = createStore(rootReducer, initialState,  enhancer);
    return store;
  }