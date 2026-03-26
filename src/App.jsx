import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import News from './pages/News';
import LookBook from './pages/LookBook';
import ContactPage from './pages/ContactPage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Events from './pages/Events';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/look-book" element={<LookBook />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
