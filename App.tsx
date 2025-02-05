import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-900 border-b border-gray-800 fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Flame className="h-8 w-8 text-red-600" />
                  <span className="ml-2 text-xl font-bold">Satan Networking</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
                <Link to="/services" className="hover:text-red-500 transition-colors">Services</Link>
                <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
                <Link to="/portfolio" className="hover:text-red-500 transition-colors">Portfolio</Link>
                <Link to="/contact" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors">
                  Contact Us
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                <Link to="/" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Home</Link>
                <Link to="/services" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Services</Link>
                <Link to="/about" className="block px-3 py-2 hover:bg-gray-700 rounded-md">About</Link>
                <Link to="/portfolio" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Portfolio</Link>
                <Link to="/contact" className="block px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md">Contact Us</Link>
              </div>
            </div>
          )}
        </nav>

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="text-center">
              <p>© {new Date().getFullYear()} Satan Networking. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;