import React from 'react';
import Layout from '../components/Layout';

const Join = () => {
  return (
    <Layout>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-4xl mx-auto text-center mt-12">
      <div className="container mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-6">Join Us</h1>
        <p className="text-gray-200 mb-6">
          Become a member today
        </p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          onClick={() => window.location.href='https://www.napierstudents.com/organisation/nmtb/'}
        >
          Sign Up Now
        </button>
      </div>
      </div>
    </Layout>
  );
};

export default Join;
