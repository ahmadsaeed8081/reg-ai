import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      // const dateInHuman =  Number(props.time) * 1000 - new Date();
      // const formattedDate = dateInHuman.toISOString();
      // const targetDate = new Date(formattedDate);

      const now = new Date().getTime();
      const distance = new Date().getTime();

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [props.time]);

  return (
    <div className="timer-comp">
      <div className="timer-box">
        <div className="time-item flex">
          <div className="_vale">{countdown.days}</div>
          <div className="_tag">Days</div>
        </div>
        <div className="time-item flex">
          <div className="_vale">{countdown.hours}</div>
          <div className="_tag">Hours</div>
        </div>

        <div className="time-item flex">
          <div className="_vale">{countdown.minutes}</div>
          <div className="_tag">Minutes</div>
        </div>
        <div className="time-item flex">
          <div className="_vale">{countdown.seconds}</div>
          <div className="_tag">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
