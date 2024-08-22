import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-6">About Napier Mountain Bike Club</h1>
        <p className="text-lg text-gray-200 mb-6">
          We are a community of mountain biking enthusiasts based in Edinburgh, Scotland. Our club welcomes riders of all skill levels,
          from complete beginners to seasoned pros. Our goal is to foster a passion for mountain biking, while enjoying the stunning
          trails Scotland has to offer.
        </p>
      </div>
    </Layout>
  );
};

export default About;
