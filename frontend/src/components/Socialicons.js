import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4">
      <a
        href="https://www.facebook.com/profile.php?id=100063534186211"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/napiermtb"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="mailto:napiermountainbike@gmail.com"
        className="text-gray-300 hover:text-white"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;
