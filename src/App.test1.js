import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../tests/testUtils';
import App from './App';

/**
 * Factory function to create a shallowWrapper for the app component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,"component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increament button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increament-button");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,"counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('renders counter start at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('renders clicking button increaments counter display ', () => {
  const counter = 7;
  const wrapper = setup(null, { counter});

  // find button and click
  const button = findByTestAttr(wrapper, 'increament-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter +1);
});

test('renders clicking button decreament counter display ', () => {
  const counter = 7;
  const wrapper = setup(null, { counter});

  // find button and click
  const button = findByTestAttr(wrapper, 'decreament-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

test('renders clicking button decreament counter below 0 and display Error ', () => {
  const counter = 0;
  const wrapper = setup(null, { counter});

  // find button and click
  const button = findByTestAttr(wrapper, 'decreament-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'error-display');
  expect(counterDisplay.text()).toContain("Below 0 no decreament possible ");
});