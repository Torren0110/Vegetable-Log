import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Catalogue from './components/Catalogue/Catalogue'
import SellForm from './components/SellForm/SellForm'
import ItemView from './components/ItemView/ItemView'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      {/* <Router>
        <Header />
        <Routes>
          <Routes path='/' />
          <Routes path='/cart' />
          <Routes path='/sellform' />
        </Routes>
      </Router> */}
      <Catalogue />
      {/* <ItemView /> */}
      {/* <SellForm /> */}
    </div>
  )
}

export default App;
