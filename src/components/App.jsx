import { Component } from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics';
import Section from './Section/Section'
import Notification from './Notification/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    const nameKey = e.target.name;
    this.setState(state => ({
      [nameKey]: state[nameKey] + 1,
    }))
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good > 0 ? (good*100/this.countTotalFeedback()).toFixed(0) : 0
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const { onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
        />) : (<Notification message="There is no feedback"/>)}
          
          </Section>

      </>
      
    )}
}

