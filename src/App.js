import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import Container from './components/Container';
import './App.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return Math.round(this.state.good/totalFeedback * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const goodFeedback = this.state.good;
    const neutralFeedback = this.state.neutral;
    const badFeedback = this.state.bad;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          {totalFeedback >= 1 ?
            <Statistics
              good={goodFeedback}
              neutral={neutralFeedback}
              bad={badFeedback}
              total={totalFeedback}
              positivePercentage={goodFeedback === 0 ? '0%' : `${positiveFeedbackPercentage}%`} />
            :
            <Notification message="No feedback given" />}
        </Section>
      </Container>
    )
  }
}

export default App;