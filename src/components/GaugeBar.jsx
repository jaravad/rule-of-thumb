import ThumbsDown from './icons/ThumbsDown';
import ThumbsUpIcon from './icons/ThumbsUp';

import { roundToFixed } from '../utils';

const GaugeBar = ({ positive = 0, negative = 0 }) => {
  const total = positive + negative;
  const positivePercentage = (positive / total) * 100 || 0;
  const negativePercentage = (negative / total) * 100 || 0;

  return (
    <div className="gauge-bar">
      <div
        style={{ width: `${positivePercentage}%` }}
        className="positive-fraction"
      >
        <div className="gauge-bar__data gauge-bar__data--positive">
          <ThumbsUpIcon className="gauge-bar__icon" />
          <span>{roundToFixed(positivePercentage)}%</span>
        </div>
      </div>
      <div
        style={{ width: `${negativePercentage}%` }}
        className="negative-fraction"
      >
        <div className="gauge-bar__data gauge-bar__data--negative">
          <span>{roundToFixed(negativePercentage)}%</span>
          <ThumbsDown className="gauge-bar__icon" />
        </div>
      </div>
    </div>
  );
};

export default GaugeBar;
