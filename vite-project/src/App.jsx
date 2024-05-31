import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import TopNav from './TopNav';
import Footer from './Footer';
import Chat from './Chat';

const App = () => {
    return (
        <Router>
            <TopNav />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>

            <Chat />
            <Footer />
        </Router>
    );
};

export default App;
