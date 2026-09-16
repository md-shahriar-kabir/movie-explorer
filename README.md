# 🎬 MovieExplorer - Responsive React Movie Discovery Application

A cinematic, responsive web application built with **React** and modern **CSS** that allows users to discover, search, and explore movies and TV shows powered by the **TVMaze API**.

![MovieExplorer Banner](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Live Demo & Repository
- **Live Deployment Link**: [Deploy on Vercel / Netlify](https://vercel.com/) *(Add your deployed URL here)*
- **GitHub Repository**: [GitHub Repo Link](https://github.com/) *(Add your GitHub repo URL here)*

---

## 🚀 Key Features

### 1. 🏠 Home Page
- **Cinematic Navbar**:
  - Brand identity with icon & glowing gradient.
  - Navigation links to Home and Movie Listing.
  - Prominent CTA button to instantly explore movies.
  - Responsive mobile navigation toggle.
- **Hero Banner**:
  - Movie-themed backdrop with radiant ambient glow and pattern overlay.
  - Compelling headline: *"DISCOVER MOVIES & SHOWS"*.
  - Engaging overview of the platform.
  - Dual Call-to-Action (CTA) buttons (*Explore Now* & *View Top Rated*).
  - Quick statistics strip (240+ curated titles, Instant Live Search, Free TVMaze API).
- **Trending Spotlight**:
  - Highlighting highest-rated global shows of the week with interactive cards.
- **Feature Showcase**:
  - Value proposition cards detailing speed, modal analytics, and fluid responsiveness.
- **Footer**:
  - Brand identity and mission statement.
  - Quick navigation shortcuts.
  - TVMaze API documentation attribution.
  - Copyright info (`© 2026 MovieExplorer`).

### 2. 🔍 Movie Listing Page
- **Dynamic Search Bar**:
  - Real-time debounced title search using `GET /search/shows?q=:query`.
  - Instant clear search button (`✕`) and loading feedback indicator.
- **Catalog Browsing**:
  - Complete popular shows catalog fetched via `GET /shows`.
- **Genre Filter Chips**:
  - Quick filtering by genres: *All, Drama, Action, Comedy, Science-Fiction, Thriller, Crime, Horror, Romance, Adventure, Mystery, Animation*.
- **Sorting Options**:
  - Sort by: *Highest Rating ⭐, Lowest Rating, Newest Release 📅, Oldest Release, Title (A-Z)*.
- **Responsive Movie Cards**:
  - High-res poster with fallback placeholder.
  - Rating badge (`⭐ 8.5`).
  - Release year (`📅 2024`).
  - Title and genre tags.
  - Interactive **"See Details"** button with micro-animation hover effects.
- **Loading & Empty States**:
  - Sleek animated shimmer skeleton cards while fetching data.
  - Friendly empty state with reset filters button when no titles match query.

### 3. 🎞️ Movie Details Modal
- **Interactive Modal Overlay**:
  - Backdrop blur and dimmed background overlay.
  - High-resolution backdrop and large poster thumbnail.
  - Movie Title, Rating badge, Premiere date.
  - Metadata grid: Status, Runtime, Network / Broadcast Channel, and Language.
  - Genre tags list.
  - Sanitized, clean overview synopsis.
  - Direct links to **Official Site** and **IMDb Profile**.
- **User-Friendly Dismissal**:
  - Top-right close button `[✕]`.
  - Bottom prominent close button `[❌ Close]`.
  - Click outside modal (backdrop click).
  - Keyboard `Escape` key shortcut.
  - Automatic background body scroll locking.

### 4. 📱 Responsive Design
- **Mobile (<768px)**: 1-2 column fluid grid, compact card padding, collapsible mobile menu.
- **Tablet (768px - 1024px)**: 2-3 column grid, optimized spacing.
- **Desktop (1024px+)**: 4-5 column rich grid layout, smooth hover cards, wide backdrop modal.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 (via Vite) |
| **Styling** | Vanilla CSS (CSS Variables, Glassmorphism, Responsive Grid) |
| **Icons** | Lucide React |
| **API** | [TVMaze Open API](https://www.tvmaze.com/api) |
| **Deployment** | Vercel / Netlify ready |

---

## 🌐 API Endpoints Used

- **All Shows**: `GET https://api.tvmaze.com/shows`
  - Fetches the primary catalog of TV shows and movies.
- **Search Shows**: `GET https://api.tvmaze.com/search/shows?q=:query`
  - Dynamically searches titles by user query string.

---

## 💻 Local Setup & Installation

Follow these steps to run the application locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/movie-explorer.git

# 2. Navigate to project directory
cd movie-explorer

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in your browser
# The terminal will display the local URL, typically http://localhost:5173
```

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📄 License
This project was developed as an educational assignment for **Programming Hero**.
Data provided by [TVMaze](https://www.tvmaze.com/).
