
import { useRef } from "react";

const OtpVerification = () => {
  const otpRefs = useRef([]);
  const messageRef = useRef(null);

  const handleChange = (e, index) => {
    const digit = e.target.value.replace(/\D/g, "").slice(-1);
    e.target.value = digit;

    if (digit && index < 3) {
      otpRefs.current[index + 1].focus();
    }

    messageRef.current.textContent = "";
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const verifyOTP = () => {
    const enteredOTP = otpRefs.current
      .map((input) => input.value)
      .join("");

    if (enteredOTP.length !== 4) {
      messageRef.current.textContent = "Enter all 4 digits.";
      messageRef.current.className =
        "mt-5 text-center font-semibold text-orange-600";
    } else if (enteredOTP === "1234") {
      messageRef.current.textContent = "OTP verified successfully!";
      messageRef.current.className =
        "mt-5 text-center font-semibold text-green-600";
    } else {
      messageRef.current.textContent = "Invalid OTP. Try again.";
      messageRef.current.className =
        "mt-5 text-center font-semibold text-red-600";
    }
  };

  const clearOTP = () => {
    otpRefs.current.forEach((input) => {
      input.value = "";
    });

    messageRef.current.textContent = "";
    otpRefs.current[0].focus();
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Task 5 - OTP Verification
      </h1>

      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Verify Your OTP
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Demo OTP: 1234
        </p>

        <div className="my-8 flex justify-center gap-3">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={(element) => {
                otpRefs.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              aria-label={`OTP digit ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="h-14 w-14 rounded-lg border-2 border-gray-300 text-center text-2xl font-bold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={verifyOTP}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Verify OTP
          </button>

          <button
            onClick={clearOTP}
            className="rounded-lg bg-gray-500 px-5 py-3 font-medium text-white hover:bg-gray-600"
          >
            Clear OTP
          </button>
        </div>

        <p
          ref={messageRef}
          aria-live="polite"
          className="mt-5 text-center font-semibold"
        />
      </div>
    </main>
  );
};

export default OtpVerification;
