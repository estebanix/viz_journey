import './App.css'
import MainScreen from './Components/Big_Components/MainScreen';
import MainAbout from './Components/Big_Components/MainAbout';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Small_Components/Nav';
import Footer from './Components/Small_Components/Footer';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/dataviz' />
        <Route path='/about' element={<MainAbout />} />
        <Route path='/contact' />
      </Routes>
      <Footer />
    </>
  )
}

export default App
