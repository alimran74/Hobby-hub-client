import { Link } from "react-router";

const BlogPreview = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Photography Tips for Beginners",
      description: "Start capturing stunning photos with these easy beginner-friendly tips!",
      image: "https://i.ibb.co/ztJLwK9/camera-7726802-1920.jpg",
    },
    {
      id: 2,
      title: "How to Start a Book Club in Your Area",
      description: "Love reading? Here's a simple guide to launch a successful book club.",
      image: "https://i.ibb.co/jkt3QdwD/book-4600757-1920.jpg",
    },
    {
      id: 3,
      title: "DIY Crafts: Fun Weekend Projects",
      description: "Get creative this weekend with these simple and fun DIY crafts!",
      image: "https://i.ibb.co/V5kNZfn/copy-2518265-1920.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-8  bg-purple-100" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">📚 HobbyHub Blog</h2>
        <p className="text-gray-600 mb-10">Explore guides, tips, and inspiration to make the most of your hobbies.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-purple-600">{blog.title}</h3>
                <p className="text-sm text-gray-600 my-2">{blog.description}</p>
                <button className="text-purple-500 font-medium hover:underline mt-2">
                 <Link to={`/blogs/${blog.id}`} className="text-purple-600 hover:underline">Read More →</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
