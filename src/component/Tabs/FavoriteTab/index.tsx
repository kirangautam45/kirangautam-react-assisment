import { useAppContext } from '../../../context/SpellContext';
import Card from '../../Card';

const FavoriteTab = () => {
  const { favoriteSpells, handleUrl, handleDialog } = useAppContext();

  const handleClick = (url: string) => {
    handleDialog();

    handleUrl(url);
  };

  return (
    <>
      {favoriteSpells.map((data) => (
        <div
          key={data.index}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleClick(data.url);
          }}
        >
          <Card spell={data.name} />
        </div>
      ))}
    </>
  );
};

export default FavoriteTab;
