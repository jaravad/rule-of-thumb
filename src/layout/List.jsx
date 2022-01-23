import { useSelector } from 'react-redux';

import ListCard from '../components/ListCard';

const List = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <>
      <h2>Previous Rulings</h2>
      <div className="grid-container">
        {characters.map((character) => {
          return <ListCard character={character} key={character.id} />;
        })}
      </div>
    </>
  );
};

export default List;
