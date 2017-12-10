import * as types from '../actions/actionTypes';
import initialState from './initialState';

const testReducer = (state = initialState.test, action) => {
  switch(action.type) {
    case types.TEST_LOCAL_STORAGE:
      return {...state, results: action.payload.results}
    default:
      return state;
  }
}

export default testReducer;
