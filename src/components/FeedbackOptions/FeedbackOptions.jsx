import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        {options.map(option => (
          <li className={s.listItem} key={option}>
            <button name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
