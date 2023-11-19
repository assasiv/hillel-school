
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import HW1 from './pages/HW1';
import HW2 from './pages/HW2';
import HW3 from './pages/HW3';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/homework-1">Greetings</Link>
            </li>
            <li>
              <Link to="/homework-2">Course Card</Link>
            </li>
            <li>
              <Link to="/homework-3">Counter</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework-1" element={<HW1 />} />
          <Route path="/homework-2" element={<HW2 />} />
          <Route path="/homework-3" element={<HW3 />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;

