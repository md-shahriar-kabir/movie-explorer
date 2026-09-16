/**
 * API Service for MovieExplorer
 * TVMaze REST API Integration
 */

const BASE_URL = 'https://api.tvmaze.com';

/**
 * Strip HTML tags from summary string safely
 */
export function stripHtml(html) {
  if (!html) return 'No synopsis available for this show.';
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

/**
 * Format premiere date to extract clean release year
 */
export function getReleaseYear(premieredDate) {
  if (!premieredDate) return 'N/A';
  const match = premieredDate.match(/^(\d{6})/);
  return match ? match[1] : 'N/A';
}

/**
 * Normalize TVMaze show object into a consistent data structure
 */
export function normalizeShow(rawShow) {
  if (!rawShow) return null;
  const show = rawShow.show ? rawShow.show : rawShow;

  return {
    id: show.id,
    title: show.name || 'Untitled Show',
    year: getReleaseYear(show.premiered),
    premiered: show.premiered || 'Unknown',
    rating: show.rating?.average ? show.rating.average.toFixed(1) : 'N/A',
    ratingScore: typeof show.rating?.average === 'number' ? show.rating.average : 0,
    genres: Array.isArray(show.genres) && show.genres.length > 0 ? show.genres : ['Entertainment'],
    image: {
      medium: show.image?.medium || '',
      original: show.image?.original || '',
    },
    summaryHtml: show.summary || '<p>No description available.</p>',
    cleanSummary: stripHtml(show.summary),
    language: show.language || 'English',
    status: show.status || 'Ended',
    runtime: show.runtime ? `${show.runtime}m` : (show.averageRuntime ? `${show.averageRuntime}m` : 'N/A'),
    network: show.network?.name || show.webChannel?.name || 'Broadcast / Streaming',
    officialSite: show.officialSite || '',
    imdbUrl: show.externals?.imdb ? `https://www.imdb.com/title/${show.externals.imdb}/` : '',
    schedule: show.schedule ? `${show.schedule.days?.join(', ') || ''} ${show.schedule.time ? '@ ' + show.schedule.time : ''}`.trim() : ''
  };
}

// In-memory cache for shows
let cachedShows = null;

/**
 * Fetch catalog of shows
 */
export async function fetchShows() {
  if (cachedShows && cachedShows.length > 0) {
    return cachedShows;
  }

  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shows: ${response.statusText}`);
    }
    const data = await response.json();
    cachedShows = data.map(normalizeShow);
    return cachedShows;
  } catch (error) {
    console.error('Error in fetchShows:', error);
    throw error;
  }
}

/**
 * Search shows by user query
 */
export async function searchShows(query) {
  if (!query || !query.trim()) {
    return fetchShows();
  }

  try {
    const trimmed = query.trim();
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(trimmed)}`);
    if (!response.ok) {
      throw new Error(`Search request failed: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(item => normalizeShow(item.show)).filter(Boolean);
  } catch (error) {
    console.error('Error in searchShows:', error);
    throw error;
  }
}
