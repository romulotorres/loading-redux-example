import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

// Meus reducers
import { loadingReducer as loading } from './loading-reducer'
import { fakeReducer as fake } from './fake-reducer'

const Reducers = combineReducers({
  loading,
  fake
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store = applyMiddleware(thunk, promise)(createStore)(Reducers, devTools)

export default Store
