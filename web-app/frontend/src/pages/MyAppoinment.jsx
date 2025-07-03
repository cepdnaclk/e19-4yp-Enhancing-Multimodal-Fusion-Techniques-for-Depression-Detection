import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function MyAppoinment() {
  const { counsellors } = useContext(AppContext);

  return (
    <div className="mx-auto py-8">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-6">
        My Appointments
      </h2>

      <div className="space-y-6">
        {counsellors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-6"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                className="w-28 h-28 rounded-lg object-cover bg-indigo-50"
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-gray-700 space-y-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>

              <div className="text-sm mt-2">
                <p className="font-medium text-gray-600">Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
              </div>

              <p className="mt-2 text-sm">
                <span className="font-medium text-gray-600">Date & Time:</span>{' '}
                July 25, 2024 | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-3 mt-4 md:mt-0 md:ml-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md transition">
                Pay Online
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-md transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppoinment;
