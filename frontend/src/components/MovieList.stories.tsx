import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieList from '../components/MovieList';

export default {
  title: 'Components/MovieList',
  component: MovieList,
} as ComponentMeta<typeof MovieList>;

const Template: ComponentStory<typeof MovieList> = (args) => <MovieList {...args} />;

export const Default = Template.bind({});
Default.args = {
  movies: [
    {
      id: 1,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality...',
      posterUrl: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
    },
    {
      id: 2,
      title: 'The Avengers',
      description: 'Earth\'s mightiest heroes must come together to stop Loki...',
      posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  movies: [], // Test case for when there are no movies
};
