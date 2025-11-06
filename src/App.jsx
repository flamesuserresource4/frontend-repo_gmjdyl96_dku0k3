import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Releases from './components/Releases.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <main>
        <Hero />
        <Releases />
      </main>
      <Footer />
    </div>
  );
}

export default App;
