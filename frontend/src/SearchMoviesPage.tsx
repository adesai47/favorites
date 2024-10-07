import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/movies'); // Correct backend port
      console.log("Movies fetched from backend:", response.data);
      setMovies(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again later.');
      setMovies([]);
    }
  };
  

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <img src={movie.posterUrl} alt={movie.title} style={{ width: '150px' }} />
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchMoviesPage;
