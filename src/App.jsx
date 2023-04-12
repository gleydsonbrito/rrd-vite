import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Login'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard'
import PageError from './PageError'
import './App.css'

function App() {
  return (
    <div className='main'>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard/:name' element={<Dashboard/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<PageError/>} />
      </Routes>
    </div>
  )
}

export default App
