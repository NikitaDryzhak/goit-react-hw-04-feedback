import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={s.statisticString}>Good: {good}</p>
      <p className={s.statisticString}>Neutral: {neutral}</p>
      <p className={s.statisticString}>Bad: {bad}</p>
      <p className={s.statisticString}>Total: {total}</p>
      <p className={s.statisticString}>
        Positive feedback: {positivePercentage} %
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
