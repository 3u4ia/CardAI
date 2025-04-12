import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Page } from './Page'

function App() {
  const [count, setCount] = useState(0);

  const something = 3;
  something + 3;
  console.log()


  return (
    <>
      <Page/>
    </>
  )
}

export default App
