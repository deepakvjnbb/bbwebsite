import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import bblogo from './photos/bbtrslogo4444C.png';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
// import React, { useState } from 'react';
import './Whatwedo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Whatwedo() {

    // ribbon falling section 
    const [showRibbons, setShowRibbons] = useState(false);
  const numberOfRibbons = 50; // Adjust the number of ribbons

  const handleClick = () => {
    setShowRibbons(true);
    setTimeout(() => setShowRibbons(false), 4000); // Hide the ribbons after 5 seconds
  };
// Send email.js section
    const form = useRef<HTMLFormElement>(null);
    // to display custom popup notification email.js addional section
    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isError, setIsError] = useState(false);
  

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
            emailjs.sendForm(
                'service_bqkt8vw',   // Replace with your EmailJS service ID
                'template_upuvx9p',  // Replace with your EmailJS template ID
                form.current,
                'iPGr0mJx03XzpuaFL' // Replace with your EmailJS user ID
            )
            .then((result) => {
                setPopupMessage("Congratulations!! Our team will get back to you within 24 hours");
                setIsError(false);
                setIsPopupVisible(true)
                handleClick(); // Trigger ribbon effect on successful submission
            }, (error) => {
                setPopupMessage("Transaction Failed. Please try again.");
                setIsError(true);
                setIsPopupVisible(true);
            });
    
            // Reset the form after submission
            form.current.reset();
        }
    };

      // Auto-hide popup after 3 seconds
  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isPopupVisible]);

  return (

    <div id="whatwedo-section" className="flex isolate flex-col items-center w-full p-4 sm:p-6 lg:p-8 bg-white">
      <div className=" w-full">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Let us know about your project requirement</h2>
        <p className="mt-6 text-xl leading-8 text-gray-600 text-center">
          We help businesses and individuals in developing custom software solutions to streamline and optimize their processes. Our tailored approach ensures each solution meets the unique needs of our clients.
        </p>
        <div className="mt-8 flex flex-col lg:flex-row justify-evenly gap-6 lg:gap-8">
          {/* Form section */}
          <div className="flex flex-1 lg:max-w-2xl">
            <form ref={form}  onSubmit={sendEmail} action="#" method="POST" className="flex-1">
              <div className="flex flex-col gap-6 lg:gap-8">
                {/* Let us know form section */}
                <div className="mt-4">
                  <label htmlFor="heading" className="block text-xl font-bold leading-6 text-gray-900">
                    Let us know what you’re looking for:
                  </label>
                  <div className="mt-2.5">
                    <fieldset>
                      <legend className="sr-only">Services</legend>
                      <div className="space-y-6 mt-8">
                        <div className="flex items-center">
                          <input
                            id="web-app"
                            name="web-app"
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor="web-app" className="ml-3 font-medium  text-base text-gray-600">
                            Cutting-edge <b>Web App Development</b>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="mobile-app"
                            name="mobile-app"
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor="mobile-app" className="ml-3 font-medium text-base text-gray-600">
                            Sleek <b>Mobile App Development</b>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="website"
                            name="website"
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor="website" className="ml-3 font-medium text-gray-600">
                            Stunning <b>Website Development</b>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                {/* Contact Information Section */}
                <div className="flex flex-col mt-4">
                  <h3 className="block text-xl font-bold text-gray-900 mb-6">Your Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                    <div className="mb-6">
                      <label htmlFor="first-name" className="block  font-semibold leading-6 text-base text-gray-600">
                        Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          required
                          autoComplete="given-name"
                          className="w-half rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="contact-number" className="block text-md font-semibold leading-6 text-base text-gray-600">
                        Contact number
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="contact-number"
                          name="contact-number"
                          type="text"
                          required
                          className="w-3/4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-md font-semibold leading-6 text-base text-gray-600">
                        Email ID
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-3/4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="location" className="block text-md font-semibold leading-6 text-base text-gray-600">
                        Your location
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="location"
                          name="location"
                          type="text"
                          required
                          className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-start">
                <button
                  type="submit"
                  
                //   onClick={handleClick}
                  className="rounded-md bg-orange-700 px-6 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  Submit and Let’s move ahead
                </button>
                <p className="mt-4 text-base leading-6 text-gray-500 ">
                  While submitting this form, we assure you that your details will be kept safe and secure{' '}
                  <a href="#" className="font-semibold text-gray-500">
                    privacy policy
                  </a>.
                </p>
                
              </div>
            </form>
 
          </div>  
          
           {/* Company Information Section */}
          <div className="  flex flex-col items-start ">
            
          <h2 className="block text-xl font-bold leading-6 text-gray-900 mt-4 mb-8">Our location</h2>

            <dl className="space-y-6 text-md leading-7 text-gray-500 ">
              <div className="flex gap-x-4">
                <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-600" />
                <dd>
                  <b>Registered address</b> 
                  <br /> No 1A, Mother Therasa street, Kutty layout, V.R.Puram,<br /> Coimbatore, TN,
                  India 641015.
                </dd>
              </div>
              <div className="flex gap-x-4">
                <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-500" />
                <dd>
                  <a href="tel:+919790076674" className="hover:text-black">
                <b>Our contact number</b> <br /> +91 (979) 007-6674
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-500" />
                <dd>
                  <a href="mailto:team@backbench.co" className="hover:text-black">
                    <b>Our Email ID</b> <br /> team@backbench.co
                  </a>
                </dd>
              </div>
            </dl>
            <div className='flex flex-col items-center '>
            <img alt="" src={bblogo} className="h-28 w-auto mb-2 mt-16 ml-10" />
            {/* <h3 className='leading-2 text-gray-500 text-gray-500 font-bold '>Backbench Company</h3>  */}
            </div>
          </div>
          </div>
          </div>
           {/* Popup message */}
      {/* Popup message */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div> {/* Background overlay */}
          <div
            className={`bg-white p-6 rounded-lg shadow-lg z-10 relative w-80 transition-transform duration-300 ease-in-out 
            ${isError ? 'border-red-500 text-red-700' : 'border-green-500 text-green-700'}`}
          >
            <div className="flex items-center space-x-2">
              {isError ? (
                <FontAwesomeIcon icon={faTimesCircle} className="w-6 h-6 text-red-500" />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-green-500" />
              )}
              <span>{popupMessage}</span>
            </div>

            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsPopupVisible(false)}
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
{/* Ribbons effect */}
{showRibbons && (
          <div className="ribbon-container">
            {Array.from({ length: numberOfRibbons }).map((_, index) => (
              <div
                key={index}
                className="ribbon"
                style={{
                  left: `${Math.random() * 100}%`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  animationDelay: `${index * 0.1}s`, // Staggered start based on index
                }}
              />
            ))}
          </div>
        )}
    </div>
  )
}