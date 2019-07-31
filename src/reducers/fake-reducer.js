const INITIAL_STATE = {
  list: ['Primeiro', 'Segundo']
}

export function fakeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, list: [...state.list, action.payload] }
    default:
      return state
  }
}
