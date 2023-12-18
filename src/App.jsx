import { useState } from 'react'
import reactLogo from './assets/react.svg'



import Quantity from './Quantity'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  

  return (
    <Provider store={store}>
    <div className="App">
      <Quantity/>
    </div>
    </Provider>
  )
}

export default App
