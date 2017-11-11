import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import users from './users';
import quizes from './quizes';

const reducer = combineReducers({
  auth,
  users,
  quizes,
  form: formReducer
});

export default reducer;
