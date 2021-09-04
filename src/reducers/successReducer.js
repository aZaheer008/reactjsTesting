import { actionTypes } from "../actions";

/**
 * @function successRider
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */

export default ( state, action ) => {
  switch( action.type ) {
    case (actionTypes.CORRECT_GUESS) : 
      return true;
    default:
      return state;
  }
};