import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0);

  const something = 3;
  something + 3;
  console.log()


  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
