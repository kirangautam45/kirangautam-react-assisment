import { useState, useEffect } from 'react';
import { fetchAllSpells } from './helper/api-communicator';

import SingleSpells from './component/SingleSpells';
import { SpellType } from './types/Spell';
import Wrapper from './component/Wrapper';

import Spinner from './component/Spinner';
import Tabs from './component/Tabs';
import { AppProvider } from './context/SpellContext';
import SpellsPage from './pages';

const App = () => {
  const [spells, setSpells] = useState<SpellType[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAllSpells();
        setSpells(() => [
          ...response.results.map((spell: SpellType) => ({
            index: spell.index,
            name: spell.name,
            url: spell.url,
          })),
        ]);
      } catch (error) {
        console.error('Error fetching spells:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpells();
  }, []);

  const toggleFavorite = (spellIndex: string) => {
    if (favorites.includes(spellIndex)) {
      setFavorites(favorites.filter((index) => index !== spellIndex));
    } else {
      setFavorites([...favorites, spellIndex]);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AppProvider>
      <SpellsPage />
    </AppProvider>
  );
};

export default App;
