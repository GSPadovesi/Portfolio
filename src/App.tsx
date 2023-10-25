import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { useState } from 'react';
import { Github } from './components/Github/Github';
import { Main } from './pages/Main/Main';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isChecked={isChecked} setIsChecked={setIsChecked} />
        <Routes>
          <Route path="/" element={<Main isOpen={isOpen} isChecked={isChecked} />} />
        </Routes>
        <Github isChecked={isChecked} />
      </BrowserRouter >
    </>
  )
}

export default App
