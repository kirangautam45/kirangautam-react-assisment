import { useAppContext } from '../../../context/SpellContext';
import Card from '../../Card';
import Wrapper from '../../Wrapper';

const AllTab = () => {
  const { spells, handleUrl, handleDialog } = useAppContext();

  const handleClick = (url: string) => {
    handleDialog();

    handleUrl(url);
  };

  return (
    <>
      {spells.map((data: { index: string; name: string; url: string }) => (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleClick(data.url);
          }}
          key={data.index}
        >
          <Wrapper>
            <Card spell={data.name} />
          </Wrapper>
        </div>
      ))}
    </>
  );
};

export default AllTab;
