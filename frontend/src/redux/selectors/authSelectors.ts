import type { RootState } from "../store/store";

const selectAuth = (state: RootState) => state.auth;

export const selectCurrentRole = (state: RootState) =>selectAuth(state).role;
export const selectCurrentUsername = (state:RootState) => selectAuth(state).role;
export const selectCurrentUserEmail = (state:RootState) => selectAuth(state).role;
export const selectIsAuthenticated=(state:RootState) => selectAuth(state).role;