import { AppProvider } from './context/SpellContext';
import SpellsPage from './pages';

const App = () => {
  return (
    <AppProvider>
      <SpellsPage />
    </AppProvider>
  );
};

export default App;
