//This is where you import things from other files, specifically where you import other pages, like login, profile, etc. 
import { Routes, Route } from 'react-router-dom';
import homepage from '../../pages/homeage';
import PageNotFound from '../../pages/PageNotFound';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1> Hello world </h1> 
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
     </div>
  );
}