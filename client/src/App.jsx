import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crashform from './Crashform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p>Hello</p> */}
      <Crashform/>
    </>
  )
}

export default App
