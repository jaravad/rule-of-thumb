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
    cursor: 'pointer',
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
      cursor: 'pointer',
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

export { selectTheme, customSelectStyles };
