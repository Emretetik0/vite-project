import React from 'react';
import Home from './views/Home.jsx';
import Anasayfa from './views/Anasayfa.jsx';
import Emre from './views/emre.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Home" element={<Home />} />
        <Route path="/Anasayfa" element={<Anasayfa />} />
        <Route path='/emre' element={<Emre />} />
      </Routes>
    </Router>
  );
}

export default App;
