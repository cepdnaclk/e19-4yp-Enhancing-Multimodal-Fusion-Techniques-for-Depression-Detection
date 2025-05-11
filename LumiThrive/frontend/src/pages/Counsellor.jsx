import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Counsellor() {
  const navigate = useNavigate();
  const { counsellors } = useContext(AppContext);

  const [visibleCount, setVisibleCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpeciality, setFilterSpeciality] = useState('');
  const [sortBy, setSortBy] = useState('');

  function docSelect(id) {
    navigate(`/appointment/${id}`);
  }

  function clickMore() {
    setVisibleCount((prev) => prev + 10);
    window.scrollTo(0, 0);
  }

  const filteredCounsellors = counsellors
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSpeciality ? item.speciality === filterSpeciality : true)
    )
    .sort((a, b) => {
      if (sortBy === 'experience') return b.experience - a.experience;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const specialties = [...new Set(counsellors.map(c => c.speciality))];

  return (
    <div className='flex flex-col items-center gap-6 my-10 text-gray-900 md:mx-10'>
      {/* Header Section */}
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Our Counsellors</h1>
        <p className='text-sm text-gray-600 mt-2'>
          Browse our list of verified mental health professionals ready to support you.
        </p>
      </div>

      {/* Filters & Sorting */}
      <div className='flex flex-wrap gap-4 justify-center items-center w-full px-4'>
        <input
          type='text'
          placeholder='Search by name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border px-4 py-2 rounded-md shadow-sm'
        />
        <select
          value={filterSpeciality}
          onChange={(e) => setFilterSpeciality(e.target.value)}
          className='border px-4 py-2 rounded-md shadow-sm'
        >
          <option value=''>All Specialties</option>
          {specialties.map((spec, i) => (
            <option key={i} value={spec}>{spec}</option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className='border px-4 py-2 rounded-md shadow-sm'
        >
          <option value=''>Sort By</option>
          <option value='experience'>Experience</option>
          <option value='rating'>Rating</option>
        </select>
      </div>

      {/* Grid Section */}
      <div className='w-full grid [grid-template-columns:var(--grid-cols-auto)] gap-6 pt-5 px-3 sm:px-0'>
        {filteredCounsellors.length === 0 ? (
          <p className='text-center col-span-full text-gray-500'>No counsellors found.</p>
        ) : (
          filteredCounsellors.slice(0, visibleCount).map((item, index) => (
            <div
              onClick={() => docSelect(item._id)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300'
              key={index}
            >
              <img
                className='bg-blue-50 w-full h-48 object-cover'
                src={item.image}
                alt={item.name}
              />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-500 mb-2'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <span>Available</span>
                </div>
                <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                <p className='text-sm text-gray-600'>{item.speciality}</p>
                <p className='text-xs text-gray-500 mt-1'>Experience: {item.experience} years</p>
                <p className='text-xs text-yellow-500'>Rating: {item.rating} / 5 ⭐</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More */}
      {visibleCount < filteredCounsellors.length && (
        <button
          onClick={clickMore}
          className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all'
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Counsellor;
