import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Suggest from './Pages/Suggest'
import Appointment from './Pages/Appointment.jsx'
import NotFound from './Pages/NotFound'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/appointment/:id" element={<Appointment />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}
