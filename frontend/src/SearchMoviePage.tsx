import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchMoviePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fetch movies from the API
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/api/movies?search=${searchQuery}`);
      if (response && response.data && Array.isArray(response.data)) {
        setMovies(response.data);  // Set the movies state if the data is an array
        setError(null);            // Clear any previous error
      } else {
        setMovies([]);             // Reset movies state to an empty array
        setError('Unexpected data format from API'); // Show error if not an array
      }
      setLoading(false);
    } catch (error) {
      setError('Failed to load movies');
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = () => {
    fetchMovies();
  };

  // Navigate to the MovieDetailsPage when a movie title is clicked
  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div>
      <h1>Search Movies</h1>

      {/* Search bar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          style={{ padding: '10px', width: '250px' }}
        />
        <button onClick={handleSearchSubmit} style={{ marginLeft: '10px', padding: '10px 20px' }}>
          Search
        </button>
      </div>

      {/* Display loading, error, or movie titles */}
      {loading ? <p>Loading movies...</p> : null}
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}

      <div>
        {movies.length > 0 ? (
          <ul style={{ listStyleType: 'none' }}>
            {movies.map((movie) => (
              <li
                key={movie.id}
                style={{ cursor: 'pointer', marginBottom: '20px' }}
                onClick={() => handleMovieClick(movie.id)}
              >
                <img src={movie.posterUrl} alt={movie.title} style={{ width: '100px' }} />
                <h3>{movie.title}</h3>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchMoviePage;
