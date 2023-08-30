const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedback:{' '}
        {positivePercentage ? positivePercentage.toFixed(0) : '0'}%
      </li>
    </ul>
  );
};

export default Statistics;
