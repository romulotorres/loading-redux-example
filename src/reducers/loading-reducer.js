const INITIAL_STATE = {
  count: 0
}

export function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOADING_START':
      return { ...state, count: state.count + 1 }
    case 'LOADING_STOP':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
