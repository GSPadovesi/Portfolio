import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import { Github } from './components/Github/Github';
import { Main } from './pages/Main/Main';
import { Load } from './components/Load/Load';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      {!loading ?
        <BrowserRouter>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isChecked={isChecked} setIsChecked={setIsChecked} />
          <Routes>
            <Route path="/Portfolio" element={<Main isOpen={isOpen} isChecked={isChecked} />} />
          </Routes>
          <Github isChecked={isChecked} />
        </BrowserRouter >
        :
        <Load />
      }
    </>
  )
}

export default App
