import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchMoviePage from './SearchMoviePage';
import MovieDetailsPage from './MovieDetailsPage';
import FavoritesPage from './FavoritesPage'; // Import FavoritesPage

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchMoviePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
