import React, { useState } from 'react';
import { Star, Calendar, Film, Info } from 'lucide-react';

export default function MovieCard({ movie, onSelect }) {
  const [imageError, setImageError] = useState(false);

  if (!movie) return null;

  const posterUrl = movie.image?.medium || movie.image?.original;

  return (
    <article className="movie-card" id={`movie-card-${movie.id}`}>
      {/* Poster Media */}
      <div className="card-poster-wrapper">
        {posterUrl && !imageError ? (
          <img
            src={posterUrl}
            alt={`${movie.title} poster`}
            className="card-poster-img"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="card-poster-placeholder">
            <Film size={40} strokeWidth={1.5} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{movie.title}</span>
          </div>
        )}

        <div className="card-poster-overlay" aria-hidden="true"></div>

        {/* Rating Badge */}
        <div className="card-rating-badge">
          <Star size={13} fill="currentColor" color="var(--accent-gold)" />
          <span>{movie.rating}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h3 className="card-title" title={movie.title}>
          {movie.title}
        </h3>

        <div className="card-meta-line">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} color="var(--text-muted)" />
            {movie.year}
          </span>
          <span className="card-meta-dot"></span>
          <span>{movie.genres[0] || 'Drama'}</span>
        </div>

        {movie.genres && movie.genres.length > 1 && (
          <div className="card-genres">
            {movie.genres.slice(0, 3).map((g) => (
              <span key={g} className="card-genre-tag">
                {g}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="card-footer">
          <button
            id={`see-details-btn-${movie.id}`}
            className="btn-details"
            onClick={() => onSelect(movie)}
            aria-label={`See details for ${movie.title}`}
          >
            <Info size={16} />
            <span>See Details</span>
          </button>
        </div>
      </div>
    </article>
  );
}
