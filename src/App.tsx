import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { useState } from 'react';
import { Home } from './pages/Home/Home';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
