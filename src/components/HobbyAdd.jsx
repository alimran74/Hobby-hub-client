import { FaUsers, FaHeart, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const HobbyAdd = () => {
  return (
    <section data-aos="fade-up" className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-6">
        Why Choose HobbyHub?
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        Connect with like-minded people, explore your passions, and grow your community through engaging and interactive hobby groups near you.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
        >
          <FaUsers className="text-purple-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Community Driven</h3>
          <p className="text-gray-600">Find and join groups that match your personal interests and hobbies.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
        >
          <FaHeart className="text-pink-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Passion Focused</h3>
          <p className="text-gray-600">Create meaningful connections with people who share the same passions.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
        >
          <FaRocket className="text-blue-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
          <p className="text-gray-600">Smooth and intuitive experience with modern features and responsive design.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HobbyAdd;
