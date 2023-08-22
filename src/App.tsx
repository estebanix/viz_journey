import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Nav from './Components/Small_Components/Nav';
import Footer from './Components/Small_Components/Footer';
import ScrollToTop from './Components/Big_Components/ScrollToTop';
import MainScreen from './Components/Big_Components/MainScreen';
import MainAbout from './Components/Big_Components/MainAbout';
import MainContact from './Components/Big_Components/MainContact';
import MainArticles from './Components/Big_Components/MainArticles';
import MainCurrentPost from './Components/Big_Components/MainCurrentPost';
import DataViz from './Components/Small_Components/Dataviz';

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/posts' element={<MainArticles />} />
        <Route path='/about' element={<MainAbout />} />
        <Route path='/contact' element={<MainContact />} />
        <Route path='/:postName' element={<MainCurrentPost />} />
        <Route path='/dataviz' element={<DataViz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
