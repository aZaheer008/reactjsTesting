import { render, screen } from '@testing-library/react';
import Enzyme , { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../tests/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter : new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the congrats component.
 * @function setup
 * @param {object} prop - Component props specific to this setup.
 * @returns { ShallowWrapper }
 */

const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper , 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is flase' , () => {
  const wrapper = setup({ success  :false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success : true });
  const message = findByTestAttr(wrapper , 'congrats-message');
  expect(message.text().length).not.toBe(0);
});