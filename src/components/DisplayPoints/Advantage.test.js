import React from 'react';
import { shallow } from 'enzyme';
import Advantage from './Advantage';

it("renders +1 on player1's advantage when player1 has an advantage", () => {
  const score = {
    gamePoints1: 4,
    gamePoints2: 3,
  };
  const wrapper = shallow(<Advantage score={score} player="player1" />);
  expect(wrapper.contains(<span>+1</span>)).toBe(true);
});

it("renders nothing on player2's advantage when player1 has an advantage", () => {
  const score = {
    gamePoints1: 4,
    gamePoints2: 3,
  };
  const wrapper = shallow(<Advantage score={score} player="player2" />);
  expect(wrapper.type()).toBe(null);
});

it("renders +1 on player2's advantage when player2 has an advantage", () => {
  const score = {
    gamePoints1: 3,
    gamePoints2: 4,
  };
  const wrapper = shallow(<Advantage score={score} player="player2" />);
  expect(wrapper.contains(<span>+1</span>)).toBe(true);
});

it("renders nothing on player1's advantage when player2 has an advantage", () => {
  const score = {
    gamePoints1: 3,
    gamePoints2: 4,
  };
  const wrapper = shallow(<Advantage score={score} player="player1" />);
  expect(wrapper.type()).toBe(null);
});
