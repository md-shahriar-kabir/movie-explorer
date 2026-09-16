import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ activeTab, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="page-wrapper navbar-inner">
        {/* Brand Logo */}
        <button
          id="navbar-brand-btn"
          className="navbar-brand"
          onClick={() => handleNavClick('home')}
          aria-label="MovieExplorer Home"
        >
          <BrandLogo />
        </button>

        {/* Desktop Navigation Links */}
        <div className={`navbar-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button
            id="nav-link-home"
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            id="nav-link-movies"
            className={`nav-link ${activeTab === 'movies' ? 'active' : ''}`}
            onClick={() => handleNavClick('movies')}
          >
            Movies & Shows
          </button>

          {/* Prominent CTA button to navigate to Movie Listing Page */}
          <button
            id="nav-cta-explore-btn"
            className="nav-cta-btn"
            onClick={() => handleNavClick('movies')}
          >
            <Compass size={18} />
            <span>Explore Movies</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle-btn"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}
