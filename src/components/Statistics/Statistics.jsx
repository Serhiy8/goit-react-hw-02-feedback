import css from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list__items}>
      <li className={css.list__item}>good: {good}</li>
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
