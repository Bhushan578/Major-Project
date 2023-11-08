import React from 'react'
import Form from './component/Form'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import DibatesForm from './Screens/DibatesForm'
import Navbar from './component/Navbar'
import Prediction from './Screens/Pridiction'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/DibatesForm" element={<DibatesForm />} />
          <Route path="/prediction" element={<Prediction/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
