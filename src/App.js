import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  )
}

export default App