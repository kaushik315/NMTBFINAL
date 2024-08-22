import React from 'react';

const Events = () => {
  return (
    <div className="bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: 'url(https://imgur.com/qX4GNcP.png)' }}>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
        
        {/* Event Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold text-white">Freshers Ride</h2>
          <p className="text-gray-400 mt-2">Date: 15th September</p>
          <p className="text-gray-300 mt-4">
            Join us for our annual Freshers Ride! It's a great way to meet fellow mountain biking enthusiasts and explore some of the best trails around Edinburgh. Whether you're a beginner or an experienced rider, everyone is welcome!
          </p>
        </div>

        {/* More events can be added here following the same structure */}
        
      </div>
    </div>
  );
};

export default Events;
