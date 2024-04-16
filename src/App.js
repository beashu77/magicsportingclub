import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './pages/Layout';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading with a setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup function to prevent memory leaks
  }, []);

  // Determine if the current location matches one of the specified routes
  const showNavbarAndFooter =
    location.pathname === '/' ||
    location.pathname === '/batches' ||
    location.pathname === '/aboutus' ||
    location.pathname === '/contact' ||
    location.pathname === '/summercamp';

  return (
    <div className=''>
      {loading ? ( // Display loader while loading is true
        <Loader />
      ) : (
        // Render Navbar, Layout, and Footer when loading is complete
        <>
          {showNavbarAndFooter && <Navbar />} {/* Render Navbar on specified routes */}
          <Layout />
          {showNavbarAndFooter && <Footer />} {/* Render Footer on specified routes */}
        </>
      )}
    </div>
  );
}

export default App;
