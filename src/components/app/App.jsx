import { Routes, Route } from 'react-router-dom';
import TempLanding from '../../pages/TempLanding.jsx';
import HomePage from '../../pages/HomePage.jsx';
import './App.css';
import Header from '../header/Header.jsx';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TempLanding />} />
        <Route path="/3d-dev" element={<HomePage />} />
      </Routes>
     </div>
  );
}
