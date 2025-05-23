import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Poster = () => {
    return (

        <section className=" py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            
            <div
              data-tooltip-id="about-tooltip"
              data-tooltip-content="Discover your passions"
              data-tooltip-place="right"
            >
              <svg
                className="w-10 h-10 text-primary mr-3"
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
            <h2 className="text-3xl font-extrabold text-gray-800">ABOUT HOBBYHUB</h2>
          </div>
          <p className="text-gray-600">
            HobbyHub is a vibrant platform where enthusiasts can create and join groups based on their interests, connect with like-minded individuals, and participate in engaging meetups.
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">HOW IT WORKS</h2>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start">Step </div>
              <div className="timeline-middle">
                <div className="badge badge-primary">1</div>
              </div>
              <div className="timeline-end">
                <p className="font-semibold">Sign Up</p>
                <p className="text-gray-600">Create your free account to get started.</p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-start">Step </div>
              <div className="timeline-middle">
                <div className="badge badge-primary">2</div>
              </div>
              <div className="timeline-end">
                <p className="font-semibold">Join/Create Group</p>
                <p className="text-gray-600">Explore existing groups or start your own.</p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-start">Step </div>
              <div className="timeline-middle">
                <div className="badge badge-primary">3</div>
              </div>
              <div className="timeline-end">
                <p className="font-semibold">Attend Meetups</p>
                <p className="text-gray-600">Participate in events and connect with others.</p>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>

      {/* Tooltip Component */}
      <Tooltip id="about-tooltip" />
    </section>


    );
};

export default Poster;