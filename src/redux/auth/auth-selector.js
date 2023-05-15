export const getisLoggedInStatus = state => state.auth.isLoggedIn;
export const getisRefreshingStatus = state => state.auth.isRefreshing;
export const getAuthName = state => state.auth.user.name;
export const getAuthMail = state => state.auth.user.email;
