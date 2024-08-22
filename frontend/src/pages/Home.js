import React from 'react';

const Home = () => {
  return (
    <div className="bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: 'url(https://imgur.com/qX4GNcP.png)' }}>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Napier Mountain Bike Club</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Scotland and mountain biking go hand in hand like chips and cheese or mud and rain. One would pretty much be pointless without the other.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Whether you've cycled since before you could walk or you're just getting started in mountain biking, Napier Mountain Bike Club (NMTB) is a place to share and nurture a passion for all things two wheels.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Our plans for 24/25 are to host weekly rides at some fine destinations across the south of Scotland with the opportunity for some rides/socials within Edinburgh during the week as well.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          If you have any questions, would like to share anything with us, or just want to stay in the loop, please stay in touch via our social media pages. We hope to see you soon!
        </p>
      </div>
    </div>
  );
};

export default Home;
