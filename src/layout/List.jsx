import { useSelector } from 'react-redux';

import ListCard from '../components/ListCard';
import MessageBanner from '../components/MessageBanner';

const List = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <>
      {characters && characters.length ? (
        <>
          <h2>Previous Rulings</h2>
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
