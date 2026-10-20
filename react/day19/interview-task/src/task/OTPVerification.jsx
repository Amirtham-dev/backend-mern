
import { useEffect, useState } from "react";

const generateOTP = () =>
  String(Math.floor(100000 + Math.random() * 900000));

const OTPVerification = () => {
  const [otp, setOtp] = useState(generateOTP);
  const [enteredOTP, setEnteredOTP] = useState("");
  const [remaining, setRemaining] = useState(60);
  const [attempts, setAttempts] = useState(0);
  const [expired, setExpired] = useState(false);
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("");
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    if (verified || expired) return;

    const timer = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setExpired(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerKey, verified, expired]);

  const verifyOTP = (e) => {
    e.preventDefault();

    if (verified || expired || attempts >= 3) return;

    if (enteredOTP === otp) {
      setVerified(true);
      setMessage("OTP verified successfully!");
    } else {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);

      if (nextAttempts >= 3) {
        setMessage("Attempt limit reached. Please resend OTP.");
      } else {
        setMessage(
          `Incorrect OTP. ${3 - nextAttempts} attempts remaining.`
        );
      }
    }
  };

  const resendOTP = () => {
    // Replace the previous OTP and invalidate its timer
    setOtp(generateOTP());
    setEnteredOTP("");
    setRemaining(60);
    setAttempts(0);
    setExpired(false);
    setVerified(false);
    setMessage("");

    // Restart the effect with a fresh timer
    setTimerKey((prev) => prev + 1);
  };

  return (
    <div className="mx-auto mt-10 max-w-sm rounded-lg bg-gray-100 p-5">
      <h1 className="mb-3 text-2xl font-bold">OTP Verification</h1>

      <p className="mb-2 text-gray-600">
        Practice OTP: <b>{otp}</b>
      </p>

      <p className="mb-4">
        Time remaining: <b>{remaining} seconds</b>
      </p>

      <form onSubmit={verifyOTP} className="space-y-3">
        <input
          value={enteredOTP}
          onChange={(e) => setEnteredOTP(e.target.value)}
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          inputMode="numeric"
          className="w-full rounded border p-2"
          disabled={verified || expired || attempts >= 3}
        />

        <button
          type="submit"
          disabled={verified || expired || attempts >= 3}
          className="w-full rounded bg-blue-600 p-2 text-white disabled:opacity-50"
        >
          Verify OTP
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}

      {expired && !verified && (
        <p className="mt-3 text-red-600">OTP expired.</p>
      )}

      {verified && (
        <p className="mt-3 text-green-600">Verified!</p>
      )}

      <button
        onClick={resendOTP}
        disabled={verified}
        className="mt-4 w-full rounded bg-gray-700 p-2 text-white disabled:opacity-50"
      >
        Resend OTP
      </button>
    </div>
  );
};

export default OTPVerification;
