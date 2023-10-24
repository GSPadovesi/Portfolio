import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { useState } from 'react';
import { Home } from './pages/Home/Home';
import { Github } from './components/Github/Github';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isChecked={isChecked} setIsChecked={setIsChecked} />
        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} />} />
        </Routes>
        <Github />
      </BrowserRouter >
    </>
  )
}

export default App
