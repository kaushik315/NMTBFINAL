import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-white"
      style={{
        backgroundImage: "url('https://imgur.com/qX4GNcP.png')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
