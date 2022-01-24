import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

import ThumbsUpIcon from './icons/ThumbsUp';
import ThumbsDownIcon from './icons/ThumbsDown';
import ButtonSpinner from './ButtonSpinner';

import {
  setAlreadyVoted,
  voteDownCharacter,
  voteUpCharacter,
} from '../redux/actions';

import { capitalizeFirstLetter } from '../utils';
import { dayjs } from '../utils/dates';

const availableOptions = {
  voteUp: 'voteUp',
  voteDown: 'voteDown',
};

const VoteControl = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const isDesktopSize = useMediaQuery({ minWidth: 768 });

  const iconsConfig = {
    width: isDesktopSize ? '18px' : '16px',
    height: isDesktopSize ? '18px' : '16px',
  };

  const { id, category, lastUpdated } = props;

  const loading = useSelector(
    (state) => state.characters.find((c) => c.id === id).loading
  );
  const alreadyVoted = useSelector(
    (state) => state.characters.find((c) => c.id === id).alreadyVoted
  );

  const relativeTime = dayjs().to(dayjs(lastUpdated), true);

  const dispatch = useDispatch();

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
      if (alreadyVoted) {
        setSelectedOption(null);
        dispatch(setAlreadyVoted(id, false));
      } else {
        if (selectedOption === availableOptions.voteUp) {
          dispatch(voteUpCharacter(id));
        } else if (selectedOption === availableOptions.voteDown) {
          dispatch(voteDownCharacter(id));
        }
      }
    }
  };

  return (
    <div className="details-container">
      <span className="date">
        {alreadyVoted
          ? 'Thank you for your vote!'
          : `${relativeTime} ago in ${capitalizeFirstLetter(category)}`}
      </span>
      <div className="buttons-wrapper">
        <div className="buttons-container">
          {!alreadyVoted && (
            <>
              <button
                name={availableOptions.voteUp}
                className={clsx(
                  'vote__button vote__button--thumbs-up',
                  selectedOption === availableOptions.voteUp &&
                    'vote__button--selected'
                )}
                onClick={handleOptionClick}
              >
                <ThumbsUpIcon {...iconsConfig} />
              </button>
              <button
                name={availableOptions.voteDown}
                className={clsx(
                  'vote__button vote__button--thumbs-down',
                  selectedOption === availableOptions.voteDown &&
                    'vote__button--selected'
                )}
                onClick={handleOptionClick}
              >
                <ThumbsDownIcon {...iconsConfig} />
              </button>
            </>
          )}
          <button
            className={clsx(
              'vote-now__button',
              loading && 'vote-now__button--loading'
            )}
            onClick={handleVoteClick}
            disabled={(!selectedOption && !alreadyVoted) || loading}
          >
            {loading && <ButtonSpinner />}
            <span>{alreadyVoted ? 'Vote Again' : 'Vote Now'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteControl;
