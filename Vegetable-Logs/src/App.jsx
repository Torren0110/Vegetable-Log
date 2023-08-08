import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Catalogue from './components/Catalogue/Catalogue'
import SellForm from './components/SellForm/SellForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Catalogue />
      {/* <SellForm /> */}
    </>
  )
}

export default App
