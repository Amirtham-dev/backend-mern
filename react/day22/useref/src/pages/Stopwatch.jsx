
import { useRef, useEffect } from "react";

const Stopwatch = () => {
  const displayRef = useRef(null);
  const intervalRef = useRef(null);
  const secondsRef = useRef(0);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      secondsRef.current += 1;
      displayRef.current.textContent = secondsRef.current;
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    secondsRef.current = 0;
    displayRef.current.textContent = "0";
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Task 4 - Stopwatch
      </h1>

      <div className="mx-auto max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">
        <p className="mb-3 text-lg text-gray-500">Elapsed time</p>

        <div className="mb-8 text-6xl font-bold tabular-nums text-blue-600">
          <span ref={displayRef}>0</span>
          <span className="ml-2 text-xl text-gray-500">seconds</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={startTimer}
            className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          >
            Start
          </button>

          <button
            onClick={stopTimer}
            className="rounded-lg bg-orange-500 px-5 py-3 text-white hover:bg-orange-600"
          >
            Stop
          </button>

          <button
            onClick={resetTimer}
            className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default Stopwatch;
