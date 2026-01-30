import { useState } from 'react'
import './App.css'
import './components/Info'
import Info from './components/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Info/>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
