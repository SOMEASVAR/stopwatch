// src/Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h1>Stopwatch</h1>
      <div className="timer-card">
        <h2>Timer</h2>
        <div className="time">
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </div>
        <div className="button-row">
          <button className="start" onClick={() => setIsActive(true)}>Start</button>
          <button className="stop" onClick={() => setIsActive(false)}>Stop</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
