import * as types from '../actions/actionTypes';
import initialState from './initialState';

const quizesReducer = (state = initialState.quizes, action) => {
  switch(action.type) {
    case types.LIST_QUIZES_REQUEST:
      return {...state, quizes: []}
    case types.LIST_QUIZES_SUCCESS:
      return {...state, quizes: action.payload.quizes}
    case types.LIST_QUIZES_FAILURE:
      return {...state, error: action.payload}
    case types.GET_QUIZ_REQUEST:
      return {...state, quiz: []}
    case types.GET_QUIZ_SUCCESS:
      return {...state, quiz: action.payload.quiz}
    case types.GET_QUIZ_FAILURE:
      return {...state, error: action.payload}
    default:
      return state;
  }
}

export default quizesReducer;
