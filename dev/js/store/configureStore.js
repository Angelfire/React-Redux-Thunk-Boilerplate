import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import allReducers from '../reducers';

const logger = createLogger();

export default function configureStore(initialState) {
  return createStore(
    allReducers,
    initialState,
    applyMiddleware(thunk, logger)
  );
}
