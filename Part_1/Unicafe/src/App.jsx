import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ name, value }) => {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ good, bad, neutral, all, average, percentage }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>

        <table>
          <StatisticLine name="Good" value={good} />
          <StatisticLine name="Neutral" value={neutral} />
          <StatisticLine name="Bad" value={bad} />
          <StatisticLine name="All" value={all} />
          <StatisticLine name="Average" value={average.toFixed(1)} />
          <StatisticLine
            name="Percentage"
            value={percentage.toFixed(1) + "%"}
          />
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const all = good + bad + neutral;
  const average = (good + bad + neutral) / 3;
  const percentage = (good / all) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        percentage={percentage}
        all={all}
      />
    </div>
  );
};

export default App;
