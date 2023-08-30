const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
