import React from 'react';

const FeaturedGroup = () => {
   const featuredGroups = [
    {
      id: 1,
      name: "Fitness Challenge",
      members: 1245,
      category: "Health",
      image: "https://i.ibb.co/yn3QY7r/fitness-group.jpg"
    },
    {
      id: 2,
      name: "Book Lovers",
      members: 892,
      category: "Education",
      image: "https://i.ibb.co/4W2yZnz/book-club.jpg"
    },
    {
      id: 3,
      name: "Startup Founders",
      members: 567,
      category: "Business",
      image: "https://i.ibb.co/0nS4NqK/startup-group.jpg"
    },
    {
      id: 4,
      name: "Photography Pros",
      members: 2310,
      category: "Arts",
      image: "https://i.ibb.co/0jQ7J0X/photography-group.jpg"
    },
    {
      id: 5,
      name: "Travel Buddies",
      members: 3456,
      category: "Travel",
      image: "https://i.ibb.co/9tLcR7G/travel-group.jpg"
    },
    {
      id: 6,
      name: "Food Lovers",
      members: 1789,
      category: "Food",
      image: "https://i.ibb.co/6n0H7Xk/food-group.jpg"
    }
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Groups</h2>
        <p className="text-gray-600 mb-8">Join these 6 ongoing active communities</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGroups.slice(0, 6).map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={group.image} 
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                  {group.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{group.name}</h3>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"/>
                  </svg>
                  <span>{group.members.toLocaleString()} members</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGroup;