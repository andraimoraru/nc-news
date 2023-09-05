import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import UsersList from './components/UsersList'
import UserProfile from './components/UserProfile'
import Home from './components/Home'



function App() {

  return (
    <div className='container'>
      <Header />
      <NavBar />
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/users" element={<UsersList/>}/>
        <Route path = "/user" element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}

export default App;
