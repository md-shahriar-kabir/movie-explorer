import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import MovieCard from '../components/MovieCard';
import { Film, RefreshCw, Frown } from 'lucide-react';

export default function MovieListingPage({
  movies,
  isLoading,
  searchQuery,
  onSearchChange,
  onClearSearch,
  onSelectMovie,
  selectedGenre,
  onSelectGenre,
  sortBy,
  onSortChange
}) {
  // Filter & Sort movies in memory
  const processedMovies = useMemo(() => {
    let result = [...movies];

    // Filter by genre
    if (selectedGenre && selectedGenre !== 'All') {
      result = result.filter(
        (m) => m.genres && m.genres.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'rating-high':
        result.sort((a, b) => b.ratingScore - a.ratingScore);
        break;
      case 'rating-low':
        result.sort((a, b) => a.ratingScore - b.ratingScore);
        break;
      case 'year-newest':
        result.sort((a, b) => {
          const yearA = parseInt(a.year, 10) || 0;
          const yearB = parseInt(b.year, 10) || 0;
          return yearB - yearA;
        });
        break;
      case 'year-oldest':
        result.sort((a, b) => {
          const yearA = parseInt(a.year, 10) || 0;
          const yearB = parseInt(b.year, 10) || 0;
          return yearA - yearB;
        });
        break;
      case 'title-az':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Featured / original order from API
        break;
    }

    return result;
  }, [movies, selectedGenre, sortBy]);

  return (
    <div className="movie-listing-page">
      <div className="page-wrapper">
        {/* Header Title */}
        <header className="listing-header">
          <h1 className="listing-title">
            Explore <span className="brand-text-accent">Movies & TV Shows</span>
          </h1>
          <p className="listing-subtitle">
            Search titles dynamically or filter through genres to uncover top-rated cinema and television masterpieces.
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onClear={onClearSearch}
          isLoading={isLoading}
        />

        {/* Genre & Sorting Controls */}
        <GenreFilter
          selectedGenre={selectedGenre}
          onSelectGenre={onSelectGenre}
          sortBy={sortBy}
          onSortChange={onSortChange}
          totalResults={processedMovies.length}
        />

        {/* Main Movie Grid / Skeletons / Empty State */}
        {isLoading ? (
          <div className="movie-grid">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="skeleton-card">
                <div className="skeleton-poster"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line" style={{ width: '80%' }}></div>
                  <div className="skeleton-line" style={{ width: '50%' }}></div>
                  <div className="skeleton-line" style={{ width: '100%', height: '36px', marginTop: '8px' }}></div>
                </div>
              </div>
            ))}
          </div>
        ) : processedMovies.length > 0 ? (
          <div className="movie-grid" id="movies-grid-container">
            {processedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={onSelectMovie}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="empty-state">
            <div className="empty-state-icon">
              <Frown size={38} />
            </div>
            <h3>No movies or shows found</h3>
            <p>
              {searchQuery
                ? `We couldn't find any titles matching "${searchQuery}". Try checking for spelling errors or searching another keyword.`
                : 'No titles match the selected genre criteria.'}
            </p>
            <button
              id="empty-state-reset-btn"
              className="btn-primary"
              onClick={() => {
                onClearSearch();
                onSelectGenre('All');
              }}
            >
              <RefreshCw size={18} />
              <span>Reset Search & Filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
