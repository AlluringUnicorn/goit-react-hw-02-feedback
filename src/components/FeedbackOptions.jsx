import PropTypes from 'prop-types';
import css from './App.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button className={css.btn} type="button" key={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}