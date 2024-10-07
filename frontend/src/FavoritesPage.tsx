import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Favorite {
  id: number;
  movie: {
    title: string;
    description: string;
    posterUrl: string;
  };
}

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/api/favorites?userId=1`);
        setFavorites(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError("Failed to load favorites. Please try again later.");
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Your Favorites</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <div key={fav.id}>
            <h3>{fav.movie.title}</h3>
            <p>{fav.movie.description}</p>
            <img src={fav.movie.posterUrl} alt={fav.movie.title} style={{ width: '150px' }} />
          </div>
        ))
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
