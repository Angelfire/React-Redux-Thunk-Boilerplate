import { combineReducers } from 'redux';
import { items, itemHasErrored, itemsIsLoading } from './items';

export default combineReducers({
  items,
  itemHasErrored,
  itemsIsLoading
});
