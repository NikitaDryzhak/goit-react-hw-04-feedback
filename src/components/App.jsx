// import React, { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

export function App() {
  const [params, setParams] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const nameKey = e.target.name;
    setParams(state => ({ ...params, [nameKey]: state[nameKey] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(params).reduce((acc, num) => acc + num, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number(
      params.good > 0
        ? ((params.good * 100) / countTotalFeedback()).toFixed(0)
        : 0
    );
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(params)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={params.good}
            neutral={params.neutral}
            bad={params.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
