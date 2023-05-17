import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getisRefreshingStatus } from 'redux/auth/auth-selector';
import { refreshUser } from 'redux/auth/auth-operations';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import HomePage from 'page/HomePage';
import { RestrictedRoute } from './RegistedRoute';
import Login from 'page/Login/Login';
import RegisterPage from 'page/Register/RegisterPage';
import Phonebook from 'page/Phonebook/PhoneBook';
import { PrivateRoute } from './PrivateRoute';
import NotFound from './NotFound/NotFound';

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(getisRefreshingStatus);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/phonebook" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/phonebook"
              />
            }
          />
          <Route
            path="/phonebook"
            element={<PrivateRoute component={Phonebook} redirectTo="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
}
