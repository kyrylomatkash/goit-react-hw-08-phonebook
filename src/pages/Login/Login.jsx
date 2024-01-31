// Імпорт бібліотек і компонентів
import { LoginForm } from 'components/login-form/LoginForm';
import { LoginPageMain } from './loginstyles';
// Основна функція компоненту
const Login = () => {
  return (
    <LoginPageMain>
      <LoginForm />
    </LoginPageMain>
  );
};
// Експорт
export default Login;
