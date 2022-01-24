import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import ThumbsUpIcon from './icons/ThumbsUp';
import ThumbsDownIcon from './icons/ThumbsDown';
import ButtonSpinner from './ButtonSpinner';
import GaugeBar from './GaugeBar';

import { voteDownCharacter, voteUpCharacter } from '../redux/actions';
import { capitalizeFirstLetter, getImage } from '../utils';
import { dayjs } from '../utils/dates';

const iconsConfig = {
  width: '1.2rem',
  height: '1.2rem',
};

const availableOptions = {
  voteUp: 'voteUp',
  voteDown: 'voteDown',
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

  const dispatch = useDispatch();
  const loading = useSelector(
    (state) => state.characters.find((c) => c.id === id).loading
  );

  const [selectedOption, setSelectedOption] = useState(null);

  const timeDifference = dayjs().to(dayjs(lastUpdated), true);

  const pictureSrc = getImage(`./${picture}-small.png`);
  const picture2xSrc = getImage(`./${picture}-small@2x.png`);

  const isPositive = positive > negative;
  const isNegative = negative > positive;

  const handleOptionClick = (e) => {
    const { name } = e.target;
    if (selectedOption === name) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption(name);
  };

  const handleVoteClick = () => {
    if (!loading) {
      if (selectedOption === availableOptions.voteUp) {
        dispatch(voteUpCharacter(id));
      } else if (selectedOption === availableOptions.voteDown) {
        dispatch(voteDownCharacter(id));
      }
    }
  };

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

          <div className="details-container">
            <span className="date">
              {timeDifference} ago in {capitalizeFirstLetter(category)}
            </span>
            <div className="buttons-wrapper">
              <div className="buttons-container">
                <button
                  name={availableOptions.voteUp}
                  className={clsx(
                    'thumbs-btn thumbs-up-btn',
                    selectedOption === availableOptions.voteUp &&
                      'thumbs-btn--selected'
                  )}
                  onClick={handleOptionClick}
                >
                  <ThumbsUpIcon {...iconsConfig} />
                </button>
                <button
                  name={availableOptions.voteDown}
                  className={clsx(
                    'thumbs-btn thumbs-down-btn',
                    selectedOption === availableOptions.voteDown &&
                      'thumbs-btn--selected'
                  )}
                  onClick={handleOptionClick}
                >
                  <ThumbsDownIcon {...iconsConfig} />
                </button>
                <button
                  className={clsx(
                    'vote-now-btn',
                    loading && 'vote-now-btn--loading'
                  )}
                  onClick={handleVoteClick}
                  disabled={!selectedOption || loading}
                >
                  {loading && <ButtonSpinner />}
                  <span>Vote now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GaugeBar positive={positive} negative={negative} />
    </div>
  );
};

export default ListCard;
