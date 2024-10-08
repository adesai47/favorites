import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from '../components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  query: '',
  onSearchChange: () => {},
  onSearchSubmit: () => {},
};
