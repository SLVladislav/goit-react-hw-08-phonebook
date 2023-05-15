import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getisLoggedInStatus } from 'redux/auth/auth-selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getisLoggedInStatus);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
