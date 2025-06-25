// src/components/StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaCity, FaFireAlt } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section data-aos="fade-up"
     className="my-12 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-800">📊 Platform Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FaFireAlt className="text-4xl text-orange-500 mb-2" />
            <h3 className="text-xl font-semibold">Active Groups</h3>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={120} duration={2} />+
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FaUsers className="text-4xl text-purple-500 mb-2" />
            <h3 className="text-xl font-semibold">Registered Users</h3>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={2500} duration={2.5} separator="," />+
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FaCity className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Cities Covered</h3>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={30} duration={1.5} />+
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
