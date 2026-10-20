
import { useState } from "react";

const LoanApplication = () => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [application, setApplication] = useState({
    name: "",
    email: "",
    employment: "",
    salary: "",
    loanAmount: "",
    loanPurpose: ""
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setApplication((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const fields = [
    ["name", "email"],
    ["employment", "salary"],
    ["loanAmount", "loanPurpose"]
  ];

  const nextStep = () => {
    const valid = fields[step].every(
      (field) => application[field].trim() !== ""
    );

    if (!valid) {
      setError("Please fill all required fields.");
      return;
    }

    if (step === 0 && !/^\S+@\S+\.\S+$/.test(application.email)) {
      setError("Enter a valid email.");
      return;
    }

    if (step === 1 && Number(application.salary) <= 0) {
      setError("Salary must be greater than zero.");
      return;
    }

    if (step === 2 && Number(application.loanAmount) <= 0) {
      setError("Loan amount must be greater than zero.");
      return;
    }

    setError("");
    setStep((prev) => prev + 1);
  };

  const submitApplication = () => {
    // One complete application object
    console.log("Application submitted:", application);
    alert("Application submitted successfully!");
  };

  const inputClass = "w-full rounded border p-2";

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-5">
      <h1 className="mb-2 text-2xl font-bold">
        Loan Application
      </h1>

      <p className="mb-4">Step {step + 1} of 4</p>

      {step === 0 && (
        <div className="space-y-3">
          <h2 className="font-bold">Personal Details</h2>
          <input
            className={inputClass}
            name="name"
            placeholder="Full name"
            value={application.name}
            onChange={updateField}
          />
          <input
            className={inputClass}
            name="email"
            placeholder="Email"
            value={application.email}
            onChange={updateField}
          />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-3">
          <h2 className="font-bold">Employment Details</h2>
          <input
            className={inputClass}
            name="employment"
            placeholder="Company / occupation"
            value={application.employment}
            onChange={updateField}
          />
          <input
            className={inputClass}
            name="salary"
            type="number"
            min="1"
            placeholder="Monthly salary"
            value={application.salary}
            onChange={updateField}
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <h2 className="font-bold">Loan Details</h2>
          <input
            className={inputClass}
            name="loanAmount"
            type="number"
            min="1"
            placeholder="Loan amount"
            value={application.loanAmount}
            onChange={updateField}
          />
          <input
            className={inputClass}
            name="loanPurpose"
            placeholder="Purpose of loan"
            value={application.loanPurpose}
            onChange={updateField}
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2 rounded bg-white p-4">
          <h2 className="font-bold">Review Application</h2>
          {Object.entries(application).map(([key, value]) => (
            <p key={key}>
              <b>{key}:</b> {value}
            </p>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-3 text-red-600">{error}</p>
      )}

      <div className="mt-5 flex justify-between gap-3">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => {
            setError("");
            setStep((prev) => prev - 1);
          }}
          className="rounded bg-gray-400 px-4 py-2 text-white disabled:opacity-40"
        >
          Back
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={submitApplication}
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default LoanApplication;
