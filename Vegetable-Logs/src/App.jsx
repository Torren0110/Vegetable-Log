import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Catalogue from './components/Catalogue/Catalogue'
import SellForm from './components/SellForm/SellForm'
import ItemView from './components/ItemView/ItemView'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Catalogue />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/sellform' element={<SellForm />}/>
          <Route path='/itemview' element={<ItemView />}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;
