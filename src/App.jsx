import React, { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from './components/layout/Layout';
import {
  selectAuthIsRefreshingCurrentUser,
  selectAuthToken,
} from './redux/auth/authSelectors';
import { refreshCurrentUser } from './redux/auth/authAsyncThunk';
import { fetchContacts } from './redux/contacts/contactsAsyncThunk';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

import { AppContainer } from './appstyles.js';
import NotFound from './pages/NotFound/NotFound';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const isRefreshingCurrentUser = useSelector(
    selectAuthIsRefreshingCurrentUser
  );

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  if (isRefreshingCurrentUser) {
    return null;
  }

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Homepage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
