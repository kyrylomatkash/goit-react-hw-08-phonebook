// Імпорт бібліотек і компонентів
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthToken } from '../redux/auth/authSelectors';
// Основна функція компоненту
export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);
  return token ? children : <Navigate to="/login" />;
};
