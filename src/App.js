import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './pages/Layout';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Determine if the current location matches one of the specified routes
  const showNavbarAndFooter =
    location.pathname === '/' ||
    location.pathname === '/batches' ||
    location.pathname === '/aboutus' ||
    location.pathname === '/contact' ||
    location.pathname === '/summercamp';

  return (
    <div className="App">
      {showNavbarAndFooter && <Navbar />} {/* Render Navbar on specified routes */}
      <Layout />
      {showNavbarAndFooter && <Footer />} {/* Render Footer on specified routes */}
    </div>
  );
}

export default App;
