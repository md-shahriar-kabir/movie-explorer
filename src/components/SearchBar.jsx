import React from 'react';
import { Search, X, Loader2 } from 'lucide-react';

export default function SearchBar({ searchQuery, onSearchChange, onClear, isLoading }) {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <div className="search-icon">
          {isLoading ? (
            <Loader2 size={22} className="spin-animation" />
          ) : (
            <Search size={22} />
          )}
        </div>

        <input
          id="movie-search-input"
          type="text"
          className="search-input"
          placeholder="🔍 Search for a movie or show title (e.g. Under the Dome, Girls, Batman)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search movies"
        />

        {searchQuery && (
          <button
            id="movie-search-clear-btn"
            className="search-clear-btn"
            onClick={onClear}
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
