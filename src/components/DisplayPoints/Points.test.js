import React from 'react';
import { shallow } from 'enzyme';
import Points from './Points';

it('renders without crashing', () => {
  shallow(<Points value={0} />);
});

it('renders 15 when a player has scored 1 point', () => {
  const wrapper = shallow(<Points value={1} />);
  expect(wrapper.contains(<span>15</span>)).toBe(true);
});

it('renders 30 when a player has scored 2 points', () => {
  const wrapper = shallow(<Points value={2} />);
  expect(wrapper.contains(<span>30</span>)).toBe(true);
});

it('renders 40 when a player has scored 3 points', () => {
  const wrapper = shallow(<Points value={3} />);
  expect(wrapper.contains(<span>40</span>)).toBe(true);
});

it('renders 40 when a player has scored > 3 points', () => {
  const wrapper = shallow(<Points value={10} />);
  expect(wrapper.contains(<span>40</span>)).toBe(true);
});
