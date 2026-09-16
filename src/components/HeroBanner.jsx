import React from 'react';
import { Compass, Sparkles, Star, Film, PlayCircle, Calendar, Info, MoveIcon, Move3DIcon, MoveDiagonalIcon, Space, StarHalf, SparklesIcon, FilmIcon, VideoIcon } from 'lucide-react';

export default function HeroBanner({ onExploreClick, onTopRatedClick, featuredMovie, onSelectMovie }) {
  // Default fallback showcase movie if none is loaded yet
  const displayMovie = featuredMovie || {
    id: 1,
    title: 'Under the Dome',
    year: '2013',
    rating: '6.6',
    genres: ['Drama', 'Sci-Fi', 'Thriller'],
    image: {
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg',
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg'
    }
  };

  const moviePoster = displayMovie?.image?.original || displayMovie?.image?.medium || 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80';
  const movieBackdrop = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80';

  const handleCardClick = () => {
    if (onSelectMovie && featuredMovie) {
      onSelectMovie(featuredMovie);
    } else {
      onExploreClick();
    }
  };

  return (
    <section className="hero-section">
      {/* Cinematic Movie Background Backdrop Image */}
      <div className="hero-bg-media" aria-hidden="true">
        <img
          src={movieBackdrop}
          alt="Cinematic Movie Backdrop"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-backdrop-glow" aria-hidden="true"></div>
      <div className="hero-grid-pattern" aria-hidden="true"></div>

      <div className="page-wrapper">
        <div className="hero-layout">
          {/* Left Column: Heading & Text */}
          <div className="hero-content">
            <div className="hero-badge">
              <VideoIcon size={16} />
              <span>Your Entertainment Place</span>
            </div>

            <h1 className="hero-title">
              DISCOVER <span className="hero-title-gradient">MOVIES</span> & SHOWS
            </h1>

            <p className="hero-description">
              Explore and discover your favorite movies from around the world. Browse comprehensive
              ratings, release years, cast overviews, and in-depth storylines in real time.
            </p>

            <div className="hero-actions">
              <button
                id="hero-cta-explore-now-btn"
                className="btn-primary"
                onClick={onExploreClick}
              >
                <Compass size={20} />
                <span>Explore Now</span>
              </button>

              {onTopRatedClick && (
                <button
                  id="hero-cta-top-rated-btn"
                  className="btn-secondary"
                  onClick={onTopRatedClick}
                >
                  <Star size={18} fill="currentColor" color="var(--accent-gold)" />
                  <span>View Top Rated</span>
                </button>
              )}
            </div>

            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="stat-number">240+</span>
                <span className="stat-label">Curated Titles</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">Instant</span>
                <span className="stat-label">Live Search</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">Free</span>
                <span className="stat-label">TVMaze Open API</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Movie Poster / Image Showcase */}
          <div className="hero-media-showcase">
            <div
              className="hero-poster-frame"
              onClick={handleCardClick}
              title={`Click to view details for ${displayMovie.title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick();
                }
              }}
            >
              {/* Floating badges */}
              <div className="hero-poster-floating-tag">
                <FilmIcon size={13} />
                <span>Featured Hit</span>
              </div>

              <div className="hero-poster-floating-rating">
                <Star size={14} fill="currentColor" color="var(--accent-gold)" />
                <span>{displayMovie.rating}</span>
              </div>

              {/* Movie Image */}
              <img
                src={moviePoster}
                alt={`${displayMovie.title} Movie Poster`}
                className="hero-poster-image"
              />

              <div className="hero-poster-glass-overlay"></div>

              {/* Movie details overlay at bottom of poster */}
              <div className="hero-poster-details">
                <h3 className="hero-poster-title">{displayMovie.title}</h3>
                <div className="hero-poster-meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} />
                    {displayMovie.year}
                  </span>
                  <span>•</span>
                  <span>{displayMovie.genres ? displayMovie.genres.slice(0, 2).join(', ') : 'Drama'}</span>
                </div>

                <button className="hero-poster-btn" type="button">
                  <Info size={15} />
                  <span>See Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
