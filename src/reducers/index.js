import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import users from './users';
import quizes from './quizes';
import test from './test';

const reducer = combineReducers({
  auth,
  users,
  quizes,
  test,
  form: formReducer
});

export default reducer;
