import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialIcons from './components/Socialicons';
import Home from './pages/Home';
import Events from './pages/Events';
import Join from './pages/Join';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <SocialIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
