
export default function StudentDetails() {
  return (
    <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
        B
      </div>

      <h3 className="mb-4 text-xl font-bold text-green-800">
        Student Details
      </h3>

      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Name:</span> Bala
        </p>
        <p>
          <span className="font-semibold">Email:</span> bala@example.com
        </p>
        <p>
          <span className="font-semibold">Course:</span> React JS
        </p>
      </div>
    </div>
  );
}
