// Імпорт бібліотек і компонентів
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthToken } from '../redux/auth/authSelectors';
// Основна функція компоненту
export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectAuthToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/" /> : children;
};
