import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch movie details by ID
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/movie/${id}`);
      setMovie(response.data); // Set movie details in state
      setError(null);
      setLoading(false);
    } catch (error) {
      setError('Failed to load movie details');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>No movie details found.</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '200px' }} />
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <button>Add to Favorites</button>
    </div>
  );
};

export default MovieDetailsPage;
