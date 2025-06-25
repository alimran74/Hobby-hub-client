import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Poster = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* About Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div
              data-tooltip-id="about-tooltip"
              data-tooltip-content="Discover your passions"
              data-tooltip-place="right"
            >
              <svg
                className="w-10 h-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">ABOUT HOBBYHUB</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            HobbyHub is a vibrant platform where enthusiasts can create and join groups based on their interests,
            connect with like-minded individuals, and participate in engaging meetups and activities.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
    <span className="text-primary text-2xl">🎯</span>
    <p className="text-gray-700 text-sm">Find groups tailored to your interests</p>
  </div>
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
    <span className="text-primary text-2xl">🤝</span>
    <p className="text-gray-700 text-sm">Connect with real people near you</p>
  </div>
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
    <span className="text-primary text-2xl">📅</span>
    <p className="text-gray-700 text-sm">Participate in local hobby events</p>
  </div>
</div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition duration-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Timeline */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                HOW IT WORKS
              </h2>
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-start text-sm font-medium">Step</div>
                  <div className="timeline-middle">
                    <div className="badge badge-primary">1</div>
                  </div>
                  <div className="timeline-end">
                    <p className="font-semibold">Sign Up</p>
                    <p className="text-gray-600 text-sm">
                      Create your free account to get started.
                    </p>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="timeline-start text-sm font-medium">Step</div>
                  <div className="timeline-middle">
                    <div className="badge badge-primary">2</div>
                  </div>
                  <div className="timeline-end">
                    <p className="font-semibold">Join/Create Group</p>
                    <p className="text-gray-600 text-sm">
                      Explore existing groups or start your own.
                    </p>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="timeline-start text-sm font-medium">Step</div>
                  <div className="timeline-middle">
                    <div className="badge badge-primary">3</div>
                  </div>
                  <div className="timeline-end">
                    <p className="font-semibold">Attend Meetups</p>
                    <p className="text-gray-600 text-sm">
                      Participate in events and connect with others.
                    </p>
                  </div>
                  <hr />
                </li>
              </ul>
            </div>

            {/* Lottie Animation */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Player
                autoplay
                loop
                src="/how-it-works.json"
                style={{ height: '180px', width: '180px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <Tooltip id="about-tooltip" />
    </section>
  );
};

export default Poster;
