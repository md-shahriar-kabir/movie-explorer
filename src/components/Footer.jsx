import React from 'react';
import { Heart, Globe, ExternalLink } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="page-wrapper">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <BrandLogo size="large" />
            <p className="footer-brand-desc">
              Your modern destination for exploring high-rated movies and television series.
              Powered by the official TVMaze Open API with live title search and detailed analytics.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  className="footer-link"
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home Landing
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  onClick={() => {
                    onNavigate('movies');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Browse All Shows
                </button>
              </li>
              <li>
                <a
                  href="https://www.tvmaze.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  TVMaze API Docs <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Resources & Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://github.com/md-shahriar-kabir/movie-explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://www.tvmaze.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Globe size={16} /> TVMaze Database
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 <strong>MovieExplorer</strong>. All rights reserved.
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Built with <Heart size={14} fill="#f43f5e" color="#f43f5e" /> MD SHARIAR KABIR.
          </div>
        </div>
      </div>
    </footer>
  );
}
