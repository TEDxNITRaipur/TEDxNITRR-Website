import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import Speakers from './components/Speakers/Speakers';
import Sponsors from './components/Sponsors/Sponsors';
import Contact from './components/Contact/Contact';
import Teams from './components/Teams/Teams';
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<MainPage/>} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="team" element={<Teams />} />
          <Route path="*" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
