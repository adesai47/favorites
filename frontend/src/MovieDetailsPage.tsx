import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        setMovie(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Failed to load movie details. Please try again later.");
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleAddToFavorites = async () => {
    try {
      await axios.post('/api/favorites', { movieId: id, userId: 1 });
      alert('Movie added to favorites!');
    } catch (error) {
      console.error("Error adding movie to favorites:", error);
      alert('Failed to add movie to favorites. Please try again.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <img src={movie.posterUrl} alt={movie.title} style={{ width: '200px' }} />
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
