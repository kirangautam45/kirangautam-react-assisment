import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SpellType } from '../types/Spell';
import { fetchAllSpells } from '../helper/api-communicator';

interface AppContextType {
  openDialog: boolean;
  spells: SpellType[];
  favoriteSpells: SpellType[];
  favorites: string[];
  toggleFavorite: (spellIndex: string) => void;
  isLoading: boolean;
  newUrl: string | undefined;
  handleUrl: (UrlName: string) => void;
  handleDialog: () => void;
}

const initialContextValue: AppContextType = {
  favoriteSpells: [],
  spells: [],
  favorites: [],
  isLoading: false,
  toggleFavorite: () => {},
  handleUrl: () => {},
  handleDialog: () => {},
  openDialog: false,

  newUrl: undefined,
};

const AppContext = createContext(initialContextValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [spells, setSpells] = useState<SpellType[]>([]);
  const [favoriteSpells, setFavoriteSpells] = useState<SpellType[]>([]);

  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newUrl, setNewUrl] = useState<string | undefined>();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleUrl = (index: string) => {
    setNewUrl(index);
  };

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

  useEffect(() => {
    const favoriteData = spells.filter((spell) =>
      favorites.includes(spell.index)
    );
    setFavoriteSpells(favoriteData);
  }, [favorites, spells]);

  const toggleFavorite = (spellIndex: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(spellIndex)) {
        // If the spellIndex is already in favorites, remove it
        return prevFavorites.filter((index) => index !== spellIndex);
      } else {
        // If the spellIndex is not in favorites, add it
        return [...prevFavorites, spellIndex];
      }
    });
  };
  return (
    <AppContext.Provider
      value={{
        favoriteSpells,
        newUrl,
        spells,
        favorites,
        isLoading,
        openDialog,
        toggleFavorite,
        handleUrl,
        handleDialog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
