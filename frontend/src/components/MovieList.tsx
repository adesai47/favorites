import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/movies');
        setMovies(response.data);
      } catch (error) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.posterUrl} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
