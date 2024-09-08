/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import bblogo from'./photos/bbtrslogo555.png'
import { useNavigate } from 'react-router-dom';

export default function Whatwedo() {
  const navigate = useNavigate();
    return (
      <div id="whatwedo-section"
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Let’s talk about your project</h2>
          <p className="mt-6 text-md leading-8 text-gray-600">
          We help businesses and individuals in developing custom software solutions to streamline and optimize their processes. Our tailored approach ensures each solution meets the unique needs of our clients.
          </p>
          <div className="mt-8 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-md font-semibold leading-6 text-gray-900">
                  Contact number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-md font-semibold leading-6 text-gray-900">
                  Email id
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="Email"
                      name="Email"
                      type="Email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-md font-semibold leading-6 text-gray-900">
                  Your location
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="website"
                      name="website"
                      type="phone"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 mt-12">
                  <label htmlFor="message" className="block text-xl font-bold leading-6 text-gray-900">
                  Let us know what you’re looking for:
                  </label>
                <div className="mt-2.5">
                <fieldset>
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        <div className="relative flex items-start ml-mt-4 mt-5 ">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              aria-describedby="comments-description"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-md  leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Cutting-edge Web App Development
            </label>{' '}
            <span id="comments-description" className="text-gray-500">
              <span className="sr-only"></span>so you always in sync with your business
            </span>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              aria-describedby="candidates-description"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-md leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900">
            Sleek Mobile App Development
            </label>{' '}
            <span id="candidates-description" className="text-gray-500">
              <span className="sr-only"></span>Sleek mobile app development that ensures seamless performance and a user-friendly experience on the go.
            </span>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              aria-describedby="offers-description"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-md leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
            Stunning Website Development
            </label>{' '}
            <span id="offers-description" className="text-gray-500">
              <span className="sr-only"></span>that captivates and engages your audience.
            </span>
          </div>
        </div>
      </div>
    </fieldset>

                </div>
                </div>
              </div>
              <div className="mt-12 flex flex-row gap-12">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit and Let’s discuss
                </button>
                {/* <Link
                to="/"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Close and back to main
                </Link> */}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                While submitting this form, we assure you that your details will be kept safe and secured{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
    
            <div className="lg:mt-6 lg:w-80 lg:flex-none ">
              <img alt="" src={bblogo} className="h-32 w-auto ml-10" />
              {/* <h2 className="text-xl font-bold tracking-tight text-gray-600">Backbench Company</h2> */}
              <dl className="mt-6 space-y-4 text-base leading-7 text-gray-500">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Registered address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-500" />
                </dt>
                <dd>
                <b>Registered address </b> <br/>
                <b>Backbench Company </b> <br/> No 9, Allwin nager , Sungam by pass road, near race course
                  <br />
                  Coimbatore, TN, India 641045.
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="+91 (979) 007-6674" className="hover:text-white">
                  <b>Our contact number </b> <br/> +91 (979) 007-6674
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:team@backbench.co" className="hover:text-white">
                  <b>Our Email id </b> <br/> team@backbench.co
                  </a>
                </dd>
              </div>
              <div className="mt-12 flex flex-row gap-12">
            {/* <button
        onClick={() => navigate("/")}
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500"
      >
        Close and back to main
      </button> */}
            </div>
            </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
