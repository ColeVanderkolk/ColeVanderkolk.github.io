import { Routes, Route } from 'react-router-dom';
import TempLanding from '../../Pages/TempLanding';
import HomePage from '../../Pages/HomePage';
import './app.css';

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