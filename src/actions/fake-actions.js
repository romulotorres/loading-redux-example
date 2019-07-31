import { loadingStart, loadingStop } from './loading-actions'

export function addItem(item) {
  return dispatch => {
    dispatch(loadingStart())
    setTimeout(function() {
      dispatch({ type: 'ADD', payload: item })
      dispatch(loadingStop())
    }, 2000)
  }
}
