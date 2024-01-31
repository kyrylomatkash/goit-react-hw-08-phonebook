// Імпорт бібліотек і компонентів
import { RegistrationForm } from 'components/registration-form/RegistrationForm';
import { RegisterPageMain } from './registerstyles';
// Основна функція компоненту
const RegisterPage = () => {
  return (
    <RegisterPageMain>
      <RegistrationForm />
    </RegisterPageMain>
  );
};
// Експорт
export default RegisterPage;
