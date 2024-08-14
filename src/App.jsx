import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <ToastContainer limit={3} />
    </>
  )
}

export default App
