import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button__container}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
