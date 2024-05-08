import SingleSpells from '../component/SingleSpells';
import Tabs from '../component/Tabs';
import Wrapper from '../component/Wrapper';
import { useAppContext } from '../context/SpellContext';

const SpellsPage = () => {
  const { openDialog } = useAppContext();

  return (
    <Wrapper>
      {!openDialog ? (
        <Tabs />
      ) : (
        <dialog open={openDialog} style={{ width: '80%' }}>
          <SingleSpells url={'/api/spells/acid-splash'} />
        </dialog>
      )}
    </Wrapper>
  );
};

export default SpellsPage;
