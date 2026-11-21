import { Routes, Route } from 'react-router-dom';
import TempLanding from '../../Pages/TempLanding.jsx';
import HomePage from '../../Pages/HomePage.jsx';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TempLanding />} />
        <Route path="/3d-dev" element={<HomePage />} />
      </Routes>
     </div>
  );
}