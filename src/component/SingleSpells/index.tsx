import React, { useEffect, useState } from 'react';
import { SingleSpellsType } from '../../types/Spell';
import { fetchSingleSpell } from '../../helper/api-communicator';
import Spinner from '../Spinner';
import { useAppContext } from '../../context/SpellContext';
import styled from 'styled-components';

interface ButtonProps {
  showAddFavorite: boolean;
}

const HeaderTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.showAddFavorite ? '#3262a8' : '#1b1b1c'};
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const SingleSpells = () => {
  const { handleDialog, toggleFavorite, newUrl, favorites } = useAppContext();
  const [spellDetails, setSpellsDetails] = useState<
    SingleSpellsType | undefined
  >();

  const [showAddFavorite, setShowAddFavorite] = useState<boolean>(false);

  useEffect(() => {
    const includeData = favorites.includes(spellDetails?.index ?? '');
    setShowAddFavorite(includeData);
  }, [favorites, spellDetails]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        setIsLoading(true);
        if (newUrl) {
          const response = await fetchSingleSpell(newUrl);

          setSpellsDetails({
            index: response.index,
            name: response.name,
            desc: response.desc,
            range: response.range,
            components: response.components,
            material: response.material,
            ritual: response.ritual,
            duration: response.duration,
            concentration: response.concentration,
            casting_time: response.casting_time,
            level: response.level,
            area_of_effect: response.area_of_effect,
            school: response.school,
            classes: response.classes,
            subclasses: response.subclasses,
            url: response.url,
          });
        }
      } catch (error) {
        console.error('Error fetching spells:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpells();
  }, [newUrl]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <HeaderTag>
        <h2>Name: {spellDetails?.name}</h2>
        <strong onClick={handleDialog} style={{ cursor: 'pointer' }}>
          x
        </strong>
      </HeaderTag>
      <strong>Description:</strong>{' '}
      {spellDetails?.desc.map(
        (desc: string | undefined, index: React.Key | undefined) => (
          <React.Fragment key={index}>{desc} </React.Fragment>
        )
      )}
      <p>
        <strong>Range:</strong> {spellDetails?.range}
      </p>
      <p>
        <strong>Components:</strong> {spellDetails?.components}
      </p>
      <p>
        <strong>Duration:</strong> {spellDetails?.duration}
      </p>
      <p>
        <strong>Casting Time:</strong> {spellDetails?.casting_time}
      </p>
      <p>
        <strong>Level:</strong> {spellDetails?.level}
      </p>
      <p>
        <strong>School:</strong> {spellDetails?.school.name}
      </p>
      <strong>Classes:</strong>{' '}
      {spellDetails?.classes.map(
        (
          classItem: { name: string | undefined },
          index: React.Key | undefined
        ) => (
          <React.Fragment key={index}>
            {classItem.name}
            {index !== spellDetails?.classes.length - 1 && ', '}
          </React.Fragment>
        )
      )}
      <HeaderTag>
        <p>
          <strong>Subclasses:</strong>{' '}
          {spellDetails?.subclasses.map(
            (
              classItem: { name: string | undefined },
              index: React.Key | undefined
            ) => (
              <React.Fragment key={index}>
                {classItem.name}
                {index !== spellDetails?.subclasses.length - 1 && ', '}
              </React.Fragment>
            )
          )}
        </p>

        {/* <button>Add to Favorite</button> */}
        <Button
          showAddFavorite={!showAddFavorite}
          onClick={() =>
            spellDetails?.index && toggleFavorite(spellDetails.index)
          }
        >
          {!showAddFavorite ? `Add to Favorite` : `Remove from Favorite`}
        </Button>
      </HeaderTag>
    </div>
  );
};

export default SingleSpells;
