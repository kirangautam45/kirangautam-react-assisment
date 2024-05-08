import { useAppContext } from '../../../context/SpellContext';
import Card from '../../Card';

const FavoriteTab = () => {
  const { favoriteSpells } = useAppContext();

  return (
    <>
      {favoriteSpells.map((data) => (
        <div key={data.index}>
          <Card spell={data.name} />
        </div>
      ))}
    </>
  );
};

export default FavoriteTab;
