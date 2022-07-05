// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Homepage from './pages/Homepage';
import BervHome from './pages/Works/BervHome';
import Dress from './pages/Works/DressBranding';
import DressMeasurement from './pages/Works/DressMeasurement';
import Stephar from './pages/Works/Stephar';
import Urbn from './pages/Works/Urbn';
import ScrollToTop from './utils/ScrollToTop';
import * as PageURL from "./utils/pageUrl"

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route exact path={PageURL.HOMEPAGE} element={<Homepage />} />
        <Route exact path={PageURL.STEPHAR} element={<Stephar />} />
        <Route exact path={PageURL.DRESS_MANAGEMENT} element={<DressMeasurement />} />
        <Route exact path={PageURL.BERVHOME} element={<BervHome />} />
        <Route exact path={PageURL.URBN} element={<Urbn />} />
        <Route exact path={PageURL.DRESS_BRANDING} element={<Dress />} />
      </Routes>
    </div>
  );
}

export default App;
