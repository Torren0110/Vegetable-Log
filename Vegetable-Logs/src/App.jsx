import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Catalogue from './components/Catalogue/Catalogue'
import SellForm from './components/SellForm/SellForm'
import ItemView from './components/ItemView/ItemView'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {ShopContextProvider} from './context/shop-context'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Header />
        <br /><br /><br /><br /><br />
        <Routes>
          <Route path='/' element={<Catalogue />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/sellform' element={<SellForm />}/>
          <Route path='/itemview/:id' element={<ItemView />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;