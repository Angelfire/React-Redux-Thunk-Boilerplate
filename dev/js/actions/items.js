export function itemHasErrored(bool) {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored: bool
  }
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

/* es6 sintaxis
export const itemsFetchDataSuccess = (items) => ({
  type: 'IEMS_FETCH_DATA_SUCESS',
  items
})*/

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then((response) => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          dispatch(itemsIsLoading(false));
          return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
