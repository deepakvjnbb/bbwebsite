import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub,faYoutube,faDiscord } from '@fortawesome/free-brands-svg-icons';

  export default function Footerbb() {
    return (
      <footer className= "bg-gradient-to-r from-gray-600 from-10% via-gray-500 via-60% to-gray-800 to-90% ...">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
          <div className="mt-6 flex justify-center space-x-10">
          <a href="https://www.linkedin.com" className="text-gray-200 hover:text-gray-400">
          <span className="sr-only">Linkedin</span>
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
           <a href="https://www.youtube.com" className="text-gray-200 hover:text-gray-400">
          <span className="sr-only">YouTube</span>
          <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
          </a>
          <a href="https://www.discord.com" className="text-gray-200 hover:text-gray-400">
          <span className="sr-only">Discord</span>
          <FontAwesomeIcon icon={faDiscord} className="h-6 w-6"/>
          </a>
          <a href="https://www.github.com" className="text-gray-200 hover:text-gray-400">
          <span className="sr-only">Github</span>
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6"/>
          </a>
          </div>
          </div>
          <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center font-semibold text-sm sm:text-md md:text-lg lg:text-xl leading-4 sm:leading-5 md:leading-6 lg:leading-7 text-gray-200">
  &copy; 2024 Backbench Company. All rights reserved.
</p>
          </div>
        </div>
      </footer>
    )
  }
  