import { createSelector  } from 'reselect'

// How much user data do I need

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)
