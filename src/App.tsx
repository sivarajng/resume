import { ThemeProvider } from './ThemeProvider';
import { Main } from './views/main/Main';

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
