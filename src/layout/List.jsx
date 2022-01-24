import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
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

  const isMobileScreen = useMediaQuery({ maxWidth: 499 });

  const CardComponent = isMobileScreen
    ? options[1].component
    : selectedOption.component;

  return (
    <>
      {characters && characters.length ? (
        <>
          <div className="list__title-wrapper">
            <h2 className="list__title">Previous Rulings</h2>
            {!isMobileScreen && (
              <Select
                value={selectedOption}
                placeholder={false}
                options={options}
                onChange={setSelectedOption}
                isSearchable={false}
                theme={selectTheme}
                styles={customSelectStyles}
              />
            )}
          </div>
          <div
            className={clsx(
              {
                'horizontal-overflow__container': isMobileScreen,
                'grid-container': !isMobileScreen,
              },
              {
                'grid-template--list-view':
                  selectedOption.value === 'list' && !isMobileScreen,
                'grid-template--grid-view':
                  selectedOption.value === 'grid' && !isMobileScreen,
              }
            )}
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
