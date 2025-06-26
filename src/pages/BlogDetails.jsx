import React from "react";
import { useParams } from "react-router";
import blogData from "../data/blogData";
import { Link } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find(item => item.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">Blog not found!</h2>
        <Link to="/" className="text-purple-600 hover:underline mt-4 block">← Go back home</Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6 shadow" />
      <h1 className="text-4xl font-bold text-purple-700 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {blog.date} · By <span className="text-purple-600 font-medium">{blog.author}</span>
      </p>
      <article className="whitespace-pre-line leading-relaxed text-lg">{blog.content}</article>
    </div>
  );
};

export default BlogDetails;
