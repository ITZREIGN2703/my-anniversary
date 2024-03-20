"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WaitingScreen() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("03/26/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {partyTime ? (
        <>
          <div className="h-screen flex items-center flex-col justify-center">
            <div className="font-bold text-4xl text-center text-center m-20 text-red-700">
              <video
                className="rounded-md"
                width="400"
                height="320"
                controls
                preload="none"
              >
                <source src="Vod.mp4" type="video/mp4" />
              </video>
            </div>
            <Link href="/timer">
              <button
                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-2xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Click Here To Read
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="wrapper">
          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Days</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
          <div className="font-bold text-6xl mt-6 text-center">
            Time Until Our Anniversary
          </div>
          <div className="font-semibold text-4xl m-4 text-center">
            Come back Here When it is time
          </div>
        </div>
      )}
    </div>
  );
}
