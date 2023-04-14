import React from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About';
import Comment from './pages/Comment';
import Analytics from './pages/Analytics';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
    <p><strong>Note:</strong> The -webkit-scrollbar is not supported in Firefox or in Edge, prior version 79.</p>




    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/comment' element={<Comment/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
  
    </Routes>
    </Sidebar>
    </BrowserRouter>
   
    </>
  )
}

export default App