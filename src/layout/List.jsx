import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import ListCard from '../components/ListCard';
import MessageBanner from '../components/MessageBanner';

const options = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];

const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    primary: 'rgba(0,0,0,0.1)',
    primary75: 'rgba(0,0,0,0.75)',
    primary50: 'rgba(0,0,0,0.1)',
  },
});

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: 'none',
    border: '2px solid black',
    boxShadow: 'none !important',
    width: '10rem',
    position: 'relative',
    '&:hover': {
      borderColor: 'unset',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  }),
  menuList: () => ({
    padding: 0,
  }),
  option: (provided, state) => {
    return {
      ...provided,
      color: 'black',
      border: '2px solid black',
      backgroundColor: state.isSelected ? 'rgba(0,0,0,0.1)' : 'white',
      padding: 10,
      width: '100%',
      textAlign: 'center',
      '&:not(:last-child)': {
        borderBottom: 'none',
      },
      '&:first-of-type': {
        borderTop: 'none',
      },
    };
  },
  valueContainer: (provided) => ({
    ...provided,
    textAlign: 'center',
    padding: '0.5rem 1rem',
  }),
  dropdownIndicator: () => ({
    backgroundColor: 'black',
    height: 6,
    width: 12,
    margin: 10,
    right: '0.2rem',
    border: 'none',
    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
  }),
};

const List = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const characters = useSelector((state) => state.characters);

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
          <div className="grid-container">
            {characters.map((character) => {
              return <ListCard character={character} key={character.id} />;
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
