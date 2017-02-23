import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    allReducers,
    initialState,
    applyMiddleware(thunk)
  );
}
