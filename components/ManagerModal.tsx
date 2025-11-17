
"use client";

export default function ManagerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow">
        <h2 className="text-2xl font-bold mb-4">Register Your Hostel</h2>

        <input
          placeholder="Hostel Name"
          className="w-full border p-2 rounded mb-3"
        />
        <input
          placeholder="Location"
          className="w-full border p-2 rounded mb-3"
        />
        <input
          placeholder="Contact Number"
          className="w-full border p-2 rounded mb-3"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-xl">
          Submit
        </button>

        <button className="w-full mt-3 text-gray-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
