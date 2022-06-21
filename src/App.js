// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ViewSelected from './components/ViewSelelected';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="selected" element={<ViewSelected />} />
      </Routes>
    </div>
  );
}

export default App;
