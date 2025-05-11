import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counsellor from './pages/Counsellor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Appoinment from './pages/Appointment'
import Navbar from './components/Navbar'
import MyAppoinment from './pages/MyAppoinment'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    
    <div className='mx-4 sm:mx-[5%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/counsellor' element={<Counsellor/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appoinment' element={<MyAppoinment />}/>
        <Route path='/appointment/:docId' element={<Appoinment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
