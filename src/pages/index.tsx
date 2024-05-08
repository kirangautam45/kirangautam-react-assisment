import SingleSpells from '../component/SingleSpells';
import Spinner from '../component/Spinner';
import Tabs from '../component/Tabs';
import Wrapper from '../component/Wrapper';
import { useAppContext } from '../context/SpellContext';

const SpellsPage = () => {
  const { openDialog, isLoading } = useAppContext();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      {!openDialog ? (
        <Tabs />
      ) : (
        <dialog open={openDialog} style={{ width: '80%' }}>
          <SingleSpells />
        </dialog>
      )}
    </Wrapper>
  );
};

export default SpellsPage;
