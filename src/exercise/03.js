// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const useCount = () => {
  const [count, setCount] = React.useContext(CountContext) || []
  if (typeof count === 'undefined') {
    throw new Error('useCount must be used inside a CountProvider')
  }
  return [count, setCount]
}

const CountProvider = (props) => {
  const [count, setCount] = React.useState(0)
  return (
    <CountContext.Provider value={[ count, setCount ]} {...props}/>
  )
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const  [, setCount]  = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountDisplay />
        <Counter />
    </div>
  )
}

export default App
