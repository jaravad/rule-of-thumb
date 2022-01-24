import clsx from 'clsx';

import ThumbsUpIcon from './icons/ThumbsUp';
import ThumbsDownIcon from './icons/ThumbsDown';
import VoteControl from './VoteControl';
import GaugeBar from './GaugeBar';

import { getImage } from '../utils';

const iconsConfig = {
  width: '1.2rem',
  height: '1.2rem',
};

const ListCard = ({ character }) => {
  const {
    id,
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes: { positive, negative },
  } = character;

  const pictureSrc = getImage(`./${picture}-small.png`);
  const picture2xSrc = getImage(`./${picture}-small@2x.png`);

  const isPositive = positive > negative;
  const isNegative = negative > positive;

  return (
    <div className="list-card">
      <div
        className={clsx('overall-score-indicator', {
          'overall-score-indicator--positive': isPositive,
          'overall-score-indicator--negative': isNegative,
        })}
      >
        {isPositive && <ThumbsUpIcon {...iconsConfig} />}
        {isNegative && <ThumbsDownIcon {...iconsConfig} />}
      </div>
      <div className="list-card-wrapper">
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
          <VoteControl lastUpdated={lastUpdated} category={category} id={id} />
        </div>
      </div>
      <GaugeBar positive={positive} negative={negative} />
    </div>
  );
};

export default ListCard;
