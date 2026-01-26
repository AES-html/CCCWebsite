
import React, { useState, useEffect, useCallback } from 'react';
import { COUNTDOWN_CONFIG } from '../config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(COUNTDOWN_CONFIG.targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimerBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-20 sm:w-28">
      <span className="text-3xl sm:text-4xl font-bold text-[#7BAFD4]">{value}</span>
      <span className="text-xs sm:text-sm text-gray-500 uppercase font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="bg-[#7BAFD4] rounded-2xl p-8 text-white shadow-xl max-w-4xl mx-auto -mt-20 relative z-10 border-4 border-white">
      <h2 className="text-2xl font-bold text-center mb-2">{COUNTDOWN_CONFIG.title}</h2>
      <p className="text-center text-[#e2f0fb] mb-8 font-medium">Coming up in...</p>
      
      <div className="flex justify-center space-x-3 sm:space-x-6 mb-8">
        <TimerBox value={timeLeft.days} label="Days" />
        <TimerBox value={timeLeft.hours} label="Hours" />
        <TimerBox value={timeLeft.minutes} label="Mins" />
        <TimerBox value={timeLeft.seconds} label="Secs" />
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <h3 className="font-bold text-lg mb-2">Event Details</h3>
        <p className="text-white/90 leading-relaxed">
          {COUNTDOWN_CONFIG.details}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
