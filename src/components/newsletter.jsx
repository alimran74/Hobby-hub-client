import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      return toast.error("Please enter a valid email address!");
    }
    toast.success("Subscribed successfully! 🎉");
    setEmail("");
  };

  return (
    <section className="bg-purple-100 py-12 px-4 md:px-8 mt-16">
      <div className="max-w-4xl mx-auto text-center space-y-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Stay in the Loop!</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Subscribe to our newsletter to get updates on new groups, events, and hobby trends.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
