import React from 'react';

interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
}

interface LoadedPageProps {
  movie: Movie | null; // Allow movie to be null
  tags: string[];
  isFavorited: boolean;
  onFavorite: () => void;
  onAddTag: (tag: string) => void;
}

const LoadedPage: React.FC<LoadedPageProps> = ({ movie, tags, isFavorited, onFavorite, onAddTag }) => {
  const [newTag, setNewTag] = React.useState('');

  // Return an error message if the movie is missing
  if (!movie) {
    return <p>No movie data available.</p>;
  }

  const handleAddTag = () => {
    if (newTag.trim()) {
      onAddTag(newTag.trim());
      setNewTag('');
    }
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '150px' }} />

      {/* Tags Section */}
      <div>
        <h3>Tags</h3>
        {tags.length > 0 ? (
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        ) : (
          <p>No tags yet.</p>
        )}
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Add a tag"
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </div>

      {/* Favorite Section */}
      <div>
        <button onClick={onFavorite} disabled={isFavorited}>
          {isFavorited ? 'Favorited' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default LoadedPage;
