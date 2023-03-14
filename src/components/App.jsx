import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const value = event.target.textContent.toLowerCase();

    this.setState(prevState => {
      switch (value) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
      }
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = isNaN(this.countPositiveFeedbackPercentage())
      ? 0
      : this.countPositiveFeedbackPercentage();

    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given yet 😿"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
