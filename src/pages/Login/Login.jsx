// Імпорт бібліотек і компонентів
import { LoginForm } from 'components/login-form/LoginForm';
import { LoginPage } from './loginstyles';
// Основна функція компоненту
const Login = () => {
  return (
    <LoginPage>
      <LoginForm />
    </LoginPage>
  );
};
// Експорт
export default Login;
