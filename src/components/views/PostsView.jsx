import React from "react";
import { useNavigate } from "react-router-dom";

const PostsView = ({ postdata }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
      {postdata?.map((post) => (
        <div
          key={post.id}
          className=" rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer p-6 flex flex-col justify-between border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          </h3>
          <p className="text-gray-700 text-sm mb-6 line-clamp-4">{post.body}</p>
          <button
            onClick={() => navigate(`/posts/${post.id}`)}
            className="mt-auto mx-auto w-[200px] px-5 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow hover:bg-indigo-600 transition"
          >
            View Post
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostsView;
