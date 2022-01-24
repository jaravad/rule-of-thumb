import clsx from 'clsx';

import ThumbsUpIcon from './icons/ThumbsUp';
import ThumbsDownIcon from './icons/ThumbsDown';
import VoteControl from './VoteControl';
import GaugeBar from './GaugeBar';

import { getImage } from '../utils';

const iconsConfig = {
  width: '1.1rem',
  height: '1.1rem',
};

const GridCard = ({ character }) => {
  const {
    id,
    name,
    picture,
    category,
    description,
    lastUpdated,
    votes: { positive, negative },
  } = character;

  const picture2xSrc = getImage(`./${picture}-small@2x.png`);

  const isPositive = positive > negative;
  const isNegative = negative > positive;

  return (
    <div
      className="grid-card"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%), url(${picture2xSrc})`,
      }}
    >
      <div className="grid-card__content">
        <div className="grid-card__title-wrapper">
          <div
            className={clsx('overall-score-indicator--grid-card', {
              'overall-score-indicator--positive': isPositive,
              'overall-score-indicator--negative': isNegative,
            })}
          >
            {isPositive && <ThumbsUpIcon {...iconsConfig} />}
            {isNegative && <ThumbsDownIcon {...iconsConfig} />}
          </div>
          <h3>{name}</h3>
        </div>
        <div className="grid-card__content--inner">
          <p>{description}</p>
          <VoteControl id={id} category={category} lastUpdated={lastUpdated} />
        </div>
      </div>
      <GaugeBar positive={positive} negative={negative} />
    </div>
  );
};

export default GridCard;
