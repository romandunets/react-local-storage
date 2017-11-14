import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import quizApi from '../api/QuizApi';

export function listQuizes() {
  return function(dispatch) {
    dispatch(listQuizesRequest());
    quizApi.listQuizes()
      .then(function (response) {
        dispatch(listQuizesSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listQuizesFailure(error));
      });
  }
}

function listQuizesRequest() {
  return { type: types.LIST_QUIZES_REQUEST }
}

function listQuizesSuccess(quizes) {
  return {
    type: types.LIST_QUIZES_SUCCESS,
    payload: { quizes }
  }
}

function listQuizesFailure(error) {
  return {
    type: types.LIST_QUIZES_FAILURE,
    payload: { error }
  }
}

export function getQuiz(id) {
  return function(dispatch) {
    dispatch(getQuizRequest());
    quizApi.getQuiz(id)
      .then(function (response) {
        dispatch(getQuizSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getQuizFailure(error));
      });
  }
}

function getQuizRequest() {
  return { type: types.GET_QUIZ_REQUEST }
}

function getQuizSuccess(quiz) {
  return {
    type: types.GET_QUIZ_SUCCESS,
    payload: { quiz }
  }
}

function getQuizFailure(error) {
  return {
    type: types.GET_QUIZ_FAILURE,
    payload: { error }
  }
}
