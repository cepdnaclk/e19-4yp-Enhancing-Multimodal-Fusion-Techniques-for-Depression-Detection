import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: "Male",
    dob: "2000-01-20"
  });

  const [editData, setEditData] = useState(userData);
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEdit(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 border border-gray-200">
      <div className="flex items-center gap-6 mb-8">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-sm"
        />
        {isEdit ? (
          <input
            type="text"
            value={editData.name}
            onChange={e => handleInputChange("name", e.target.value)}
            className="text-xl font-semibold border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Contact Information</h3>
          <div className="mb-3">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <p className="mt-1 text-gray-800">{userData.email}</p>
          </div>
          <div className="mb-3">
            <label className="text-sm font-medium text-gray-600">Phone</label>
            {isEdit ? (
              <input
                type="text"
                value={editData.phone}
                onChange={e => handleInputChange("phone", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-1 text-gray-800">{userData.phone}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Address</label>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={editData.address.line1}
                  onChange={e => handleAddressChange("line1", e.target.value)}
                  placeholder="Line 1"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={editData.address.line2}
                  onChange={e => handleAddressChange("line2", e.target.value)}
                  placeholder="Line 2"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            ) : (
              <p className="mt-1 text-gray-800">
                {userData.address.line1}, {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Basic Information</h3>
          <div className="mb-3">
            <label className="text-sm font-medium text-gray-600">Gender</label>
            {isEdit ? (
              <select
                value={editData.gender}
                onChange={e => handleInputChange("gender", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="mt-1 text-gray-800">{userData.gender}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Date of Birth</label>
            {isEdit ? (
              <input
                type="date"
                value={editData.dob}
                onChange={e => handleInputChange("dob", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-1 text-gray-800">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {isEdit ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition font-medium"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-md transition font-medium"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition font-medium"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
