import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="bg-purple-100 min-h-screen py-16 px-4 md:px-8 mt-12">
      <div className="max-w-5xl mx-auto space-y-16 text-gray-800">
        {/* Header */}
        <div className="text-center" data-aos="zoom-in">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-3 drop-shadow-md">
            About <span className="text-pink-500">HobbyHub</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Your Local Hobby Group Organizer
          </p>
        </div>

        {/* Our Mission */}
        <section
          className="bg-white rounded-xl shadow-md p-6 md:p-10 transition-all hover:shadow-xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            🎯 Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            HobbyHub connects people through shared interests. Whether it's photography, book reading,
            gardening or tech — we help you discover and join local hobby groups to learn, grow, and make friends.
          </p>
        </section>

        {/* Features */}
        <section
          className="bg-white rounded-xl shadow-md p-6 md:p-10 transition-all hover:shadow-xl"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            🚀 Features
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>Join or create local hobby groups</li>
            <li>View and organize group events</li>
            <li>Leave reviews and connect with like-minded people</li>
            <li>Beautiful responsive interface built with React + Tailwind</li>
          </ul>
        </section>

        {/* Creator Section */}
        <section
          className="bg-white rounded-xl shadow-md p-6 md:p-10 transition-all hover:shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            👨‍💻 About the Creator
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-purple-700">HobbyHub</span> was developed by{' '}
            <strong className="text-pink-500">Al Imran</strong>, a passionate MERN Stack developer from{' '}
            <span className="font-semibold">Mirpur, Dhaka</span>. With a love for building meaningful
            platforms and connecting communities, this project is both a technical and social initiative.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
