import { actionTypes } from "../actions";
import successReducer from './successReducer';

test('returns defaul initial state of `` when no action is passed',() => {
  const newState = successReducer(false , {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`',() => {
  const newState = successReducer(undefined , { type : actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});

