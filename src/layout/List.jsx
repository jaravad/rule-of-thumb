import ListCard from '../components/ListCard';

import data from '../assets/data';

const List = () => {
  return (
    <>
      <h2>Previous Rulings</h2>
      <div className="grid-container">
        {data.map((character, i) => {
          return <ListCard character={character} key={i} />;
        })}
      </div>
    </>
  );
};

export default List;
