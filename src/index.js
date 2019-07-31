import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './reducers'
import Teste from './Teste'

function App() {
  return (
    <Provider store={Store}>
      <Teste />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
