import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Client from './sections/Client';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <main className="ml-20 w-full p-6"> {/* Adjust ml-20 if your sidebar width changes */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
