import React from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieCard from '../components/MovieCard';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Search, Eye, FileImageIcon, TrendingUp, CircleDashed, CircleDashedCheckIcon } from 'lucide-react';

export default function HomePage({
  featuredMovies,
  isLoading,
  onSelectMovie,
  onNavigateToMovies,
  onSelectTopRated
}) {
  // Top 4 or 8 highest-rated shows to spotlight
  const spotlightMovies = [...featuredMovies]
    .sort((a, b) => b.ratingScore - a.ratingScore)
    .slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <HeroBanner
        featuredMovie={spotlightMovies[0] || featuredMovies[0]}
        onSelectMovie={onSelectMovie}
        onExploreClick={() => onNavigateToMovies()}
        onTopRatedClick={() => {
          onSelectTopRated();
          onNavigateToMovies();
        }}
      />

      {/* Featured / Trending Spotlight Section */}
      <section className="section">
        <div className="page-wrapper">
          <div className="section-header">
            <div className="section-title-wrap">
              <div className="section-eyebrow">
                <TrendingUp size={16} />
                <span>Trending Spotlight</span>
              </div>
              <h2 className="section-title">Top-Rated Picks of the Week</h2>
              <p className="section-description">
                Handpicked global selections celebrated for stellar ratings, compelling storylines, and memorable performances.
              </p>
            </div>

            <button
              id="home-view-all-btn"
              className="view-all-link"
              onClick={() => onNavigateToMovies()}
            >
              <span>Explore All Catalog</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {isLoading ? (
            <div className="spotlight-grid">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="skeleton-card">
                  <div className="skeleton-poster"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-line" style={{ width: '80%' }}></div>
                    <div className="skeleton-line" style={{ width: '50%' }}></div>
                    <div className="skeleton-line" style={{ width: '100%', height: '36px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="spotlight-grid">
              {spotlightMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={onSelectMovie}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Features / Value Props Section */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.015)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="page-wrapper">
          <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3rem', display: 'block' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <CircleDashedCheckIcon size={16} />
              <span>Modern Experience</span>
            </div>
            <h2 className="section-title">Why Movie Lovers Choose Us</h2>
            <p className="section-description" style={{ margin: '0.75rem auto 0', maxWidth: '600px' }}>
              Engineered with speed, clarity, and comprehensive entertainment data directly from TVMaze.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <Search size={24} />
              </div>
              <h3>Lightning Fast Search</h3>
              <p>
                Dynamic real-time search queries TVMaze's database instantly without lag or cumbersome page refreshes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Eye size={24} />
              </div>
              <h3>Interactive Details Modal</h3>
              <p>
                Access full synopsis, official broadcast networks, air schedules, and ratings within an interactive modal overlay.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Responsive Everywhere</h3>
              <p>
                Optimized with a responsive CSS grid layout that adapts seamlessly to phones, tablets, and high-res desktops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
