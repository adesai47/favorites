import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieCard from '../components/MovieCard';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'The Matrix',
  description: 'A computer hacker learns about the true nature of his reality...',
  posterUrl: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
};
