// Імпорт бібліотеки
import CircularProgress from '@mui/material/CircularProgress';
// Основна функція компоненту
export function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </div>
  );
}
