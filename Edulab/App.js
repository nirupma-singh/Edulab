import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => 
{
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App