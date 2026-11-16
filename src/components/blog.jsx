
import React, { useState } from "react";
import Navbar from "./navbar";
import { auth } from '../config/firebase';
import { useEffect } from 'react';

const Blog = () => {

  const [admin, setadmin] = useState(false)
  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        if (user.uid === "EiVY7NrUTwZ4ZdJcS4UP9dilW522") {
          setadmin(true)
          console.log("welcome Admin")
        }
        else{
             console.log("not a Admin")
        }
      }
      else {
        setadmin(false)
        console.log("not a Admin")
      }


    })
  }, []);


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      content: "This is Blog 1 Content",
      date: "March 21, 2024",
      likes: 7,
    },
  ]);

  // Add Blog Functio
  const addBlog = (e) => {
    e.preventDefault();



    const newBlog = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      likes: 0,
    };

    setBlogs([...blogs, newBlog]);

    setTitle("");
    setContent("");
  };

  // Like Function
  const likeBlog = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, likes: blog.likes + 1 }
          : blog
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">

      <Navbar />

      {/* Blog Heading */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest <span className="text-orange-500">Blogs</span> 📚
        </h1>

        {/* Add Blog Form */}
        {admin ? <form onSubmit={addBlog} className="mb-10">

          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-orange-400"
          />

          <textarea
            placeholder="Write your blog here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3 outline-none resize-none focus:border-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 mt-3 rounded-md transition duration-300 font-semibold"
          >
            Add Blog
          </button>

        </form> : ""}

        {/* Blog List */}
        <div className="space-y-8">

          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="border-b border-gray-200 pb-6"
            >

              <h2 className="text-xl font-bold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-400 text-sm mb-3">
                {blog.date}
              </p>

              <p className="text-gray-700 mb-4">
                {blog.content}
              </p>

              <button
                onClick={() => likeBlog(blog.id)}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Like 👍 {blog.likes} Likes
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Blog;
