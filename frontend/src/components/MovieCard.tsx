import React, { FC } from 'react';

interface MovieCardProps {
  title: string;
  description: string;
  posterUrl: string;
}

const MovieCard: FC<MovieCardProps> = ({ title, description, posterUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={posterUrl} alt={title} style={{ width: '150px' }} />
    </div>
  );
};

export default MovieCard;
