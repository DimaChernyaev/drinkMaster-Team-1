export const signupFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

export const signinFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

export const signupRejected = (state, action) => {
  state.error = action.payload;
};

export const signoutFulfilled = (state) => {
  state.user = { name: '', email: '', avatarURL: '' };
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
