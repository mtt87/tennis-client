import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { BtnPlayerScored } from './BtnPlayerScored';

it('onClick score for player1', () => {
  const onClickMock = sinon.spy();
  const wrapper = shallow(<BtnPlayerScored onClickScored={onClickMock} player="player1" />);
  wrapper.find('button').simulate('click');
  expect(onClickMock.calledOnce).toBe(true);
});

it('onClick score for player2', () => {
  const onClickMock = sinon.spy();
  const wrapper = shallow(<BtnPlayerScored onClickScored={onClickMock} player="player2" />);
  wrapper.find('button').simulate('click');
  expect(onClickMock.calledOnce).toBe(true);
});
