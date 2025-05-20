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

function App() {
  const sampleTrek = Data.treks;
  const setTreks = useTrekStore((state) => state.setTreks);
  setTreks(sampleTrek);

  return (
    <Router>
      <ScrollToTop/>
      <main className='mt-17'>
      <Navbar/>
        <Routes>
        <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/treks" element={<Trek/>}/>
          <Route path="/trek-details/:slug" element={<TrekDetails/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
