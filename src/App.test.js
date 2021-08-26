import { render, screen } from '@testing-library/react';
import Enzyme , { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter : new EnzymeAdapter()})

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
});

test('renders increament button', () => {

});

test('renders counter display', () => {

});

test('renders counter start at 0', () => {

});

test('renders clicking button increaments counter display ', () => {

});

