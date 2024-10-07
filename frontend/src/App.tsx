import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchMoviesPage from './SearchMoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
import FavoritesPage from './FavoritesPage';
import ErrorBoundary from './ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<SearchMoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
