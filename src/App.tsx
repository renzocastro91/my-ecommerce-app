import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Layout from './components/layout/Layout'
import Categories from './components/categories/Categories'
import NotFound from './screens/notFound/NotFound'
import Products from './components/product/Products'
import Detail from './components/productDetail/Detail'
import Cart from './components/cart/Cart'
import Login from './components/login/Login'
import Register from './components/login/Register'


function App() {
  return(
    <>
      <BrowserRouter>
       <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/products/:id' element={<Detail/>}/>
          <Route path='/cartDetail' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>  
        </Route> 
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
