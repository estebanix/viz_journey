import './App.css'
import MainScreen from './Components/Big_Components/MainScreen';
import MainAbout from './Components/Big_Components/MainAbout';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/dataviz' />
        <Route path='/about' element={<MainAbout />} />
        <Route path='/contact' />
      </Routes>
    </>
  )
}

export default App
