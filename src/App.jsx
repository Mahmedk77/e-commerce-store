import { Routes, Route } from 'react-router'
import { About, Cart, Collection, Contact, 
         Home, Login, Orders, PlaceOrders, 
         Product } from './pages/index.js'
import { Navbar } from './components'

function App() {
  

  return (
  <div className='px-4 sm:px-[5vm] md:px-[7vw] lg:px-[9vw]'> 
  
  <Navbar/>

  <Routes>
    <Route path={'/'} exact element={<Home />}/>
    <Route path={'/about'} element={<About />}/>
    <Route path={'/collection'} element={<Collection />}/>
    <Route path={'/contact'} element={<Contact />}/>
    <Route path={'/Cart'} element={<Cart />}/>
    <Route path={'/PlaceOrders'} element={<PlaceOrders />}/>
    <Route path={'/Product/:id'} element={<Product />}/>
    <Route path={'/Login'} element={<Login />}/>
    <Route path={'/Orders'} element={<Orders />}/>


  </Routes>

  </div>

  )
}

export default App
