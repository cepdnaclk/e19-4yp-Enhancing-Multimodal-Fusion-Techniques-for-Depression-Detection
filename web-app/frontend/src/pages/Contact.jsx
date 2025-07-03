import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

function Contact() {
  return (
    <div>
      {/* Page Header */}
      <div className="text-center text-2xl pt-12 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-20">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-md rounded-lg shadow-lg object-cover"
          src={assets.contact_image}
          alt="Team collaborating in the office"
        />

        {/* Contact Details */}
        <div className="flex flex-col gap-8 text-gray-700 text-[15px] md:w-2/3">
          {/* Office Info */}
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-2">Our Office</p>
            <p className="leading-relaxed">
              123 Wellness Street, Suite 204<br />
              Colombo 07, Sri Lanka
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-medium text-gray-800 mb-1">Get in Touch</p>
            <p className="leading-relaxed">
              Tel: +94 11 234 5678<br />
              Email: <a href="mailto:contact@lumithrive.com" className="text-primary underline hover:text-primary-dark">contact@lumithrive.com</a>
            </p>
          </div>

          {/* Careers */}
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-2">Careers at LumiThrive</p>
            <p className="leading-relaxed">
              Are you passionate about mental wellness and technology? We're always looking for talented individuals
              to help us shape the future of emotional care.
            </p>
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
