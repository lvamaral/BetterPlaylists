import * as APIUtil from '../util/user_util'

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUsers = query => dispatch => {
  return (
  APIUtil.users(query).then(users => (
    dispatch(receiveUsers(users))
  ))
)};

export const getUser = id => dispatch => {
  return (
  APIUtil.user(id).then(user => (
    dispatch(receiveUser(user))
  ))
)};
