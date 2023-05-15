import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  getisLoggedInStatus,
  getisRefreshingStatus,
} from 'redux/auth/auth-selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getisLoggedInStatus);
  const isRefreshing = useSelector(getisRefreshingStatus);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
