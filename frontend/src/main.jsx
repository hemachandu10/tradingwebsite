import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router"
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import Login from "./landingPage/login/login"
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/Signup'
import About from './landingPage/about/AboutPage'
import Products from './landingPage/products/ProductsPage'
import Pricing from './landingPage/pricing/PricingPage'
import Support from './landingPage/support/SupportPage'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/support' element={<Support/>}></Route>
      </Routes>
    <Footer/>
  </BrowserRouter>,
)
