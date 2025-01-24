import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Analyze from './pages/Analyze'
import Docs from './pages/Docs'
import Blog from './pages/Blog'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/analyze' element={<Analyze/>}></Route>
        <Route path='/docs' element={<Docs/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </div>
  )
}

export default App
