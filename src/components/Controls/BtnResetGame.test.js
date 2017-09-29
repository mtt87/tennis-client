import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { BtnResetGame } from './BtnResetGame';

it('onClick reset for player1', () => {
  const onClickMock = sinon.spy();
  const wrapper = shallow(<BtnResetGame onClickReset={onClickMock} />);
  wrapper.find('button').simulate('click');
  expect(onClickMock.calledOnce).toBe(true);
});
