import styled from 'styled-components';

const Chip = styled.div`
  display: flex;
  margin: 16px;
  align-content: space-around;
  align-items: center;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
`;

interface CardProps {
  spell: string;
}

const Card = ({ spell }: CardProps) => {
  return <Chip>{spell}</Chip>;
};

export default Card;
