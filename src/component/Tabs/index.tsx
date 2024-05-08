import { useState } from 'react';
import AllTab from './AllTabs';
import FavoriteTab from './FavoriteTab';
import Wrapper from '../Wrapper';
import styled from 'styled-components';

const Button = styled.button<{ active: boolean }>`
  width: 45%;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  color: ${(props) => (props.active ? '#ffffff' : '#333333')};
  background-color: ${(props) => (props.active ? '#007bff' : '#ffffff')};
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  outline: none;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const TabWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 8px;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <TabWrapper>
        <Button active={activeTab === 'all'} onClick={() => openTab('all')}>
          All
        </Button>
        <Button
          active={activeTab === 'favoriteTab'}
          onClick={() => openTab('favoriteTab')}
        >
          favoriteTab
        </Button>
      </TabWrapper>

      <Wrapper>
        {activeTab === 'all' && <AllTab />}

        {activeTab === 'favoriteTab' && <FavoriteTab />}
      </Wrapper>
    </>
  );
};

export default Tabs;
