import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieModal from './components/MovieModal';
import HomePage from './pages/HomePage';
import MovieListingPage from './pages/MovieListingPage';
import { fetchShows, searchShows } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return window.location.hash === '#movies' ? 'movies' : 'home';
  });
  const [allShows, setAllShows] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const searchTimeoutRef = useRef(null);

  // Sync URL hash with active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#movies') {
        setActiveTab('movies');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback((tab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'movies' ? '#movies' : '#home';
  }, []);

  // Fetch initial shows catalog on mount
  useEffect(() => {
    let isMounted = true;
    async function loadCatalog() {
      setIsLoading(true);
      try {
        const shows = await fetchShows();
        if (isMounted) {
          setAllShows(shows);
        }
      } catch (err) {
        console.error('Failed to load shows:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadCatalog();
    return () => {
      isMounted = false;
    };
  }, []);

  // Debounced search handler
  const handleSearchChange = (query) => {
    setSearchQuery(query);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const results = await searchShows(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setIsSearching(false);
      }
    }, 350);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const handleSelectTopRated = () => {
    setSortBy('rating-high');
    setSelectedGenre('All');
  };

  // Determine current movie list to display
  const currentMovies = searchQuery.trim() ? searchResults : allShows;

  return (
    <div className="app-container">
      {/* Global Navbar */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'home' ? (
          <HomePage
            featuredMovies={allShows}
            isLoading={isLoading}
            onSelectMovie={setSelectedMovie}
            onNavigateToMovies={() => handleNavigate('movies')}
            onSelectTopRated={handleSelectTopRated}
          />
        ) : (
          <MovieListingPage
            movies={currentMovies}
            isLoading={isLoading || isSearching}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
            onSelectMovie={setSelectedMovie}
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
