import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStatesCount = evt => {
    const optionKey = evt.target.textContent;
    this.setState(prevStarte => {
      return { [optionKey]: prevStarte[optionKey] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, el) => {
      return (acc = acc + el);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.addStatesCount}
        />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default Feedback;
