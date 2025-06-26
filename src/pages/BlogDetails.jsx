import React from "react";
import { useParams } from "react-router";
import blogData from "../data/blogData";
import { Link } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find(item => item.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-500">Blog not found!</h2>
          <Link to="/" className="text-purple-600 hover:underline mt-4 block">← Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-100 px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-6 border border-purple-100">
        {/* Blog Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-60 sm:h-80 object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Blog Info */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700">{blog.title}</h1>
          <p className="text-sm text-gray-500">
            {blog.date} · By <span className="text-purple-600 font-semibold">{blog.author}</span>
          </p>
          <hr className="border-purple-200" />
          <article className="whitespace-pre-line leading-relaxed text-gray-700 text-base sm:text-lg">
            {blog.content}
          </article>
        </div>

        {/* Back Link */}
        <div>
          <Link
            to="/"
            className="inline-block mt-6 text-purple-600 font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
