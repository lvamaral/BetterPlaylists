import merge from 'lodash/merge';

import  {RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const def_state = {
  users: {},
  newMember: {}
}

const UserReducer = (state = def_state, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USERS:
      const users = {users: action.users};
      // debugger
      return {users: users, newMember: state.newMember}
    case RECEIVE_USER:
      const user = action.user;
      console.log("user red", merge(state, {newMember: user}));
      return merge(state, {newMember: user})
    default:
      return state;
  }
};

export default UserReducer;
