// Імпорт бібліотек і компонентів
import { RegistrationForm } from 'components/registration-form/RegistrationForm';
import { RegisterPage } from './registerstyles';
// Основна функція компоненту
const Register = () => {
  return (
    <RegisterPage>
      <RegistrationForm />
    </RegisterPage>
  );
};
// Експорт
export default Register;
