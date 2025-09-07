import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import PostsView from "../../../components/views/PostsView";

const PostsHero = () => {
  const { data, loading, error } = useFetch("/posts");

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500 text-lg">Loading...</div>
    );

  if (error)
    return (
      <div className="text-center py-10 text-red-500 text-lg">
        Error: {error.message}
      </div>
    );

  return (
    <div className="mt-30 container mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6 text-blue-500">
        Posts
      </h2>
      <PostsView postdata={data} />
    </div>
  );
};

export default PostsHero;
