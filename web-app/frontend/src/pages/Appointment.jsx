import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedCounsellors from '../components/RelatedCounsellors';

function Appointment() {
  const { docId } = useParams();
  const { counsellors, currencySymbol } = useContext(AppContext);
  const [counsellorInfo, setCounInfo] = useState(null);
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const [counSlot, setCounSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const getAvailableSlot = async () => {
    setCounSlot([]);
    let today = new Date();

    for (let index = 0; index < 7; index++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + index);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (index === 0) {
        let now = new Date();
        now.setSeconds(0);
        now.setMilliseconds(0);
        let minutes = now.getMinutes();
        now.setMinutes(minutes <= 30 ? 30 : 0);
        if (minutes > 30) now.setHours(now.getHours() + 1);
        if (now.getHours() < 10) now.setHours(10, 0);
        currentDate = now;
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlot = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Colombo'
        });

        timeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setCounSlot(prev => [...prev, timeSlot]);
    }
  };

  useEffect(() => {
    const counInfo = counsellors.find(doc => doc._id === docId);
    setCounInfo(counInfo);
  }, [counsellors, docId]);

  useEffect(() => {
    getAvailableSlot();
  }, [counsellorInfo]);

  return counsellorInfo && (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4 md:px-6">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src={counsellorInfo.image}
              alt={counsellorInfo.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          {/* Name & Verified */}
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-800">{counsellorInfo.name}</h2>
            <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
          </div>

          {/* Degree & Experience */}
          <div className="text-sm sm:text-base text-gray-600 space-y-2">
            <p>{counsellorInfo.degree} - {counsellorInfo.speciality}</p>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm">
              {counsellorInfo.experience} years experience
            </span>
          </div>

          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-lg font-medium text-gray-700">
              <p>About</p>
              <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{counsellorInfo.about}</p>
          </div>

          {/* Fees */}
          <p className="text-sm font-medium text-gray-700 mt-4">
            Appointment fee: <span className="text-gray-800">{currencySymbol}.{counsellorInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="max-w-6xl mx-auto mt-10 px-4 md:px-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Booking Slots</h3>

        {/* Day selectors */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {
            counSlot.map((slots, index) => (
              <button
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`min-w-[72px] text-center py-3 px-4 rounded-lg text-sm transition duration-200 ${
                  slotIndex === index
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-100'
                }`}
              >
                <p className="font-medium">{slots[0] && daysOfWeek[new Date(slots[0].datetime).getDay()]}</p>
                <p>{slots[0] && new Date(slots[0].datetime).getDate()}</p>
              </button>
            ))
          }
        </div>

        {/* Time slots */}
        <div className="flex gap-3 flex-wrap mt-6">
          {
            counSlot[slotIndex] &&
            counSlot[slotIndex].map((slot, index) => (
              <button
                key={index}
                onClick={() => setSlotTime(slot.time)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  slot.time === slotTime
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {slot.time.toLowerCase()}
              </button>
            ))
          }
        </div>

        {/* Book button */}
        <div className="mt-8">
          <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Related Counsellors */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10">
        <RelatedCounsellors docId={docId} speciality={counsellorInfo.speciality} />
      </div>
    </div>
  );
}

export default Appointment;
