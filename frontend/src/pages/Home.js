import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Napier Mountain Bike Club (NMTB)</h1>
        <p className="text-lg mb-6">
          Scotland and mountain biking are a perfect match, just like chips and cheese or mud and rain—they belong together.
          Whether you've been cycling since before you could walk or are just starting out in mountain biking, NMTB is here
          to share and nurture a passion for all things on two wheels. What better place to join a mountain bike club than Edinburgh, 
          with Scotland's top riding destination, the Tweed Valley, right on our doorstep!
        </p>
        <p className="text-lg mb-6">
          For the 24/25 season, we’re planning weekly rides at some of the finest destinations across the south of Scotland, 
          along with the chance for some rides and socials within Edinburgh during the week. 
        </p>
        <p className="text-lg">
          If you have any questions, want to share something with us, or simply wish to stay in the loop, 
          please keep in touch via our social media pages. We hope to see you out on the trails soon!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
