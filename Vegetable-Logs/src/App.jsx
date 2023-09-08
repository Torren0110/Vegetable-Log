import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Catalogue from './components/Catalogue/Catalogue'
import SellForm from './components/SellForm/SellForm'
import ItemView from './components/ItemView/ItemView'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {ShopContextProvider} from './context/shop-context'
import Register from './components/user/Register/Register'
import About from './components/About/About'
import Login from './components/user/Login/Login'
import Home from './components/Home/Home'
import CheckOut from './components/CheckOut/CheckOut'
import Profile from './components/Profile/Profile'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Orders from './components/Orders/orders'
import Sales from './components/Sales/Sales'
import Prediction from './components/Prediction/Prediction'
// ..

function App() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Header />
        <br /><br /><br /><br /><br />
        <Routes>
          <Route path='/prices' element={<Catalogue />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/sellform' element={<SellForm />}/>
          <Route path='/itemview/:id' element={<ItemView />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/> 
          <Route path='/about' element={<About />}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/predict' element={<Prediction/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
   

    </div>
  )
}

export default App;