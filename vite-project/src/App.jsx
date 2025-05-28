import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TopNav from './TopNav';
import Footer from './Footer';
import Chat from './Chat';

const App = () => {
    return (
        <Router>
            <TopNav />

            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>

            <Chat />
            <Footer />
        </Router>
    );
};

export default App;
