import React from 'react';
import { ArrowUpDown } from 'lucide-react';

const POPULAR_GENRES = [
  'All',
  'Drama',
  'Action',
  'Comedy',
  'Science-Fiction',
  'Thriller',
  'Crime',
  'Horror',
  'Romance',
  'Adventure',
  'Mystery',
  'Animation'
];

export default function GenreFilter({
  selectedGenre,
  onSelectGenre,
  sortBy,
  onSortChange,
  totalResults
}) {
  return (
    <div className="filter-toolbar">
      {/* Genre Chips Horizontal Scroll */}
      <div className="genre-scroll-wrapper" role="tablist" aria-label="Genre filters">
        {POPULAR_GENRES.map((genre) => (
          <button
            key={genre}
            id={`genre-filter-${genre.toLowerCase()}`}
            className={`genre-chip ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => onSelectGenre(genre)}
            role="tab"
            aria-selected={selectedGenre === genre}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Meta Bar: Results count and Sort dropdown */}
      <div className="filter-meta-bar">
        <div className="results-count">
          Showing <strong>{totalResults}</strong> {totalResults === 1 ? 'title' : 'titles'}
          {selectedGenre !== 'All' && <span> in <em>{selectedGenre}</em></span>}
        </div>

        <div className="sort-select-wrapper">
          <ArrowUpDown size={15} color="var(--accent-gold)" />
          <label htmlFor="movie-sort-select" style={{ fontSize: '0.88rem' }}>
            Sort by:
          </label>
          <select
            id="movie-sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="featured">Featured / Default</option>
            <option value="rating-high">Highest Rating ⭐</option>
            <option value="rating-low">Lowest Rating</option>
            <option value="year-newest">Newest Release 📅</option>
            <option value="year-oldest">Oldest Release</option>
            <option value="title-az">Title (A - Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
