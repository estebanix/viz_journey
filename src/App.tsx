import './App.css'
import MainScreen from './Components/Big_Components/MainScreen';
import MainAbout from './Components/Big_Components/MainAbout';
import MainContact from './Components/Big_Components/MainContact';
import MainArticles from './Components/Big_Components/MainArticles';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Small_Components/Nav';
import Footer from './Components/Small_Components/Footer';
import CurrentPost from './Components/Small_Components/CurrentPost';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/posts' element={<MainArticles />} />
        <Route path='/about' element={<MainAbout />} />
        <Route path='/contact' element={<MainContact />}/>
        <Route path='/:postName' element={<CurrentPost />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
