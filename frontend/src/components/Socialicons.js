import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
  return (
    <div className="fixed lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 flex lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0 p-4 
                    left-0 bottom-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 justify-center lg:justify-start">
      <a
        href="https://www.facebook.com/profile.php?id=100063534186211"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white block"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/napiermtb"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white block"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="mailto:napiermountainbike@gmail.com"
        className="text-gray-300 hover:text-white block"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;
