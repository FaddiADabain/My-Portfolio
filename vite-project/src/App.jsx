import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import TopNav from './TopNav';
import Footer from './Footer';

const App = () => {
    return (
        <Router>
          <TopNav />

          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
          </Routes>

          <Footer />
        </Router>
    );
};

export default App;
