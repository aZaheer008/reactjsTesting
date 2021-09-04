import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware , and initial state.
 * Globals : rootReducer
 * @param {object} initialState - Initial state for store. 
 * @function storeFactory
 * @returns {Store} - Redux store.
 */

export const storeFactory = (initialState) => {
  return createStore(rootReducer,initialState);
}

/**
 * Factory function to create a ShallowWrapper for the congrats component.
 * @function setup
 * @param {object} prop - Component props specific to this setup.
 * @returns { ShallowWrapper }
 */

export const findByTestAttr = (wrapper , val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps ) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name  );
    expect(propError).toBeUndefined();
}