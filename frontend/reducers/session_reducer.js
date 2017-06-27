import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT_USER
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  let currentUser
  let newUser
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      newUser = merge({}, nullUser, {
        currentUser
      });
      return newUser
    case LOGOUT_USER:
      currentUser = action.currentUser;
      newUser = merge({}, nullUser, {
        currentUser
      });
      return newUser


    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
