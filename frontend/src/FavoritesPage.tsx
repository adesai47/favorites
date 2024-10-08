import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
}

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]); // Ensure this is initialized as an array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch favorite movies when the component mounts
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites?userId=1'); // Replace with actual userId

        // Check if response data is an array
        if (Array.isArray(response.data)) {
          setFavorites(response.data);
        } else {
          setFavorites([]); // Set to an empty array if the response is not an array
          setError('Unexpected response format.');
        }

        setLoading(false);
      } catch (error) {
        setError('Failed to load favorite movies.');
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <p>Loading your favorites...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Your Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((movie) => (
            <div key={movie.id} style={{ marginBottom: '20px' }}>
              <h3>{movie.title}</h3>
              <img src={movie.posterUrl} alt={movie.title} style={{ width: '150px' }} />
              <p>{movie.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
