import React, { useState, useEffect } from 'react';
import { StyledClock } from '../styles/StyledClock';
import { ReactComponent as ClockLogo } from '../assets/icons/clock.svg';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  const timerID = () => setInterval(() => tick(), 1000);

  useEffect(() => {
    timerID();
    return () => {
      clearInterval(timerID());
    };
  });


  const hoursDegrees = date.getHours() * 30 + date.getMinutes() / 2;
  const minutesDegrees = date.getMinutes() * 6 + date.getSeconds() / 10;
  const secondsDegrees = date.getSeconds() * 6;

  const divStyleHours = {
    transform: `rotateZ(${hoursDegrees}deg)`,
  };

  const divStyleMinutes = {
    transform: `rotateZ(${minutesDegrees}deg)`,
  };

  const divStyleSeconds = {
    transform: `rotateZ(${secondsDegrees}deg)`,
  };

  return (
    <div>
      <StyledClock className="styling">
        <div id="clock" className="clock-content">
          <ClockLogo />
          <div
            id="hours-indicator"
            className={
              `indicator hours-indicator ${
                date.getHours() === 0 ? '' : 'transition-effect'}`
            }
            style={divStyleHours}
          />
          <div
            id="minutes-indicator"
            className={
              `indicator minutes-indicator ${
                date.getMinutes() === 0 ? '' : 'transition-effect'}`
            }
            style={divStyleMinutes}
          />
          <div
            id="seconds-indicator"
            className={
              `indicator seconds-indicator ${
                date.getSeconds() === 0 ? '' : 'transition-effect'}`
            }
            style={divStyleSeconds}
          />
          <div className="indicator-cover" />
        </div>
      </StyledClock>
    </div>
  );
};

export default Clock;
