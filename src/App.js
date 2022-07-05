// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Homepage from './pages/Homepage';
import BervHome from './pages/Works/BervHome';
import Dress from './pages/Works/Dress';
import Stephar from './pages/Works/Stephar';
import Urbn from './pages/Works/Urbn';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/works/stephar" element={<Stephar />} />
        <Route path="/works/bervhome" element={<BervHome />} />
        <Route path="/works/urbn" element={<Urbn />} />
        <Route path="/projects/dress" element={<Dress />} />
      </Routes>
    </div>
  );
}

export default App;
