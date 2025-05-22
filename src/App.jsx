import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Trek from './pages/Trek';
import TrekDetails from './pages/TrekDetails';
import NotFound from './pages/NotFound';
import Data from "../data.json";
import useTrekStore from './store/trekStore';
import ScrollToTop from './components/ScrollToTop';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  const sampleTrek = Data.treks;
  const setTreks = useTrekStore((state) => state.setTreks);
  setTreks(sampleTrek);

  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <main className='mt-17'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/treks" element={<Trek/>}/>
          <Route path="/trek-details/:slug" element={<TrekDetails/>}/>
          <Route path='/terms-and-conditions' element={<Terms/>}/>
          <Route path='/privacy-policy' element={<Privacy/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
