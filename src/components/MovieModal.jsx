import React, { useEffect } from 'react';
import { X, Star, Calendar, Clock, Tv, Globe, ExternalLink, Film } from 'lucide-react';

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;

    // Lock body scroll when modal is active
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const backdropUrl = movie.image?.original || movie.image?.medium;
  const posterUrl = movie.image?.medium || movie.image?.original;

  // Handle backdrop click (clicking outside the modal container)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      id="movie-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-movie-title"
    >
      <div className="modal-container">
        {/* Top Close Button */}
        <button
          id="modal-close-top-btn"
          className="modal-close-top-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Media / Backdrop Header */}
        <div className="modal-backdrop-media">
          {backdropUrl ? (
            <img
              src={backdropUrl}
              alt={`${movie.title} backdrop`}
              className="modal-backdrop-img"
            />
          ) : (
            <div className="card-poster-placeholder" style={{ height: '100%' }}>
              <Film size={48} color="var(--accent-gold)" />
            </div>
          )}
          <div className="modal-backdrop-gradient"></div>

          <div className="modal-header-content">
            {posterUrl && (
              <img
                src={posterUrl}
                alt={`${movie.title} poster`}
                className="modal-poster-thumb"
              />
            )}
            <div className="modal-header-meta">
              <h2 id="modal-movie-title" className="modal-title">
                {movie.title}
              </h2>
              <div className="modal-badges-row">
                <span className="modal-rating-badge">
                  <Star size={15} fill="currentColor" color="var(--accent-gold)" />
                  Rating: {movie.rating}
                </span>
                <span className="modal-date-badge">
                  <Calendar size={15} />
                  Release: {movie.premiered !== 'Unknown' ? movie.premiered : movie.year}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body Info */}
        <div className="modal-body">
          {/* Genre Badges */}
          {movie.genres && movie.genres.length > 0 && (
            <div className="modal-genres-list">
              {movie.genres.map((genre) => (
                <span key={genre} className="modal-genre-pill">
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Quick Info Grid */}
          <div className="modal-info-grid">
            <div className="modal-info-item">
              <span className="modal-info-label">Status</span>
              <span className="modal-info-val">{movie.status}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Runtime</span>
              <span className="modal-info-val" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} color="var(--text-muted)" />
                {movie.runtime}
              </span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Network / Channel</span>
              <span className="modal-info-val" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Tv size={14} color="var(--text-muted)" />
                {movie.network}
              </span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Language</span>
              <span className="modal-info-val">{movie.language}</span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="modal-overview-section">
            <h4>Overview:</h4>
            <p className="modal-overview-text">{movie.cleanSummary}</p>
          </div>

          {/* Footer Actions */}
          <div className="modal-footer-actions">
            <div className="modal-external-links">
              {movie.officialSite && (
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-external"
                >
                  <Globe size={15} />
                  <span>Official Site</span>
                  <ExternalLink size={13} />
                </a>
              )}
              {movie.imdbUrl && (
                <a
                  href={movie.imdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-external"
                >
                  <span>IMDb Profile</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>

            {/* Prominent Bottom Close Button matching wireframe: [ ❌ Close ] */}
            <button
              id="modal-close-bottom-btn"
              className="btn-modal-close-bottom"
              onClick={onClose}
              aria-label="Close details modal"
            >
              <X size={16} />
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
