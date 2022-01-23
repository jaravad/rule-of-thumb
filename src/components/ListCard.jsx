import ThumbsUpIcon from './icons/ThumbsUp';
import ThumbsDownIcon from './icons/ThumbsDown';

import { capitalizeFirstLetter, getImage } from '../utils';

const ListCard = ({ character }) => {
  const { name, description, category, picture } = character;

  const pictureSrc = getImage(`./${picture}-small.png`);
  const picture2xSrc = getImage(`./${picture}-small@2x.png`);

  return (
    <div className="list-card">
      <img
        src={pictureSrc}
        srcSet={`${pictureSrc} 750w, ${picture2xSrc} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        alt={name}
        className="background-photo"
      />
      <div className="overlay" />
      <div className="inner-container">
        <div className="data-container">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className="details-container">
          <span className="date">
            1 year ago in {capitalizeFirstLetter(category)}
          </span>
          <div className="buttons-wrapper">
            <div className="buttons-container">
              <button className="thumbs-btn thumbs-up-btn">
                <ThumbsUpIcon width="1.2rem" height="1.2rem" />
              </button>
              <button className="thumbs-btn thumbs-down-btn">
                <ThumbsDownIcon width="1.2rem" height="1.2rem" />
              </button>
              <button className="vote-now-btn">Vote now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
