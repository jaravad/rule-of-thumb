import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import clsx from 'clsx';

import ListCard from '../components/ListCard';
import GridCard from '../components/GridCard';
import MessageBanner from '../components/MessageBanner';

import { selectTheme, customSelectStyles } from '../utils/react-select';

const options = [
  { value: 'list', label: 'List', component: ListCard },
  { value: 'grid', label: 'Grid', component: GridCard },
];

const List = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const characters = useSelector((state) => state.characters);

  const CardComponent = selectedOption.component;

  return (
    <>
      {characters && characters.length ? (
        <>
          <div className="list__title-wrapper">
            <h2 className="list__title">Previous Rulings</h2>
            <Select
              value={selectedOption}
              placeholder={false}
              options={options}
              onChange={setSelectedOption}
              isSearchable={false}
              theme={selectTheme}
              styles={customSelectStyles}
            />
          </div>
          <div
            className={clsx('grid-container', {
              'grid-template--list-view': selectedOption.value === 'list',
              'grid-template--grid-view': selectedOption.value === 'grid',
            })}
          >
            {characters.map((character) => {
              return <CardComponent character={character} key={character.id} />;
            })}
          </div>
        </>
      ) : (
        <MessageBanner message="We're sorry, there's no available data to show right now" />
      )}
    </>
  );
};

export default List;
