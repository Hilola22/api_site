import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

const PostsDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/posts/${id}`);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500 text-lg">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center py-10 text-red-500 text-lg">
        {error?.message || "Something went wrong"}
      </div>
    );

  return (
    <div className="max-w-2xl mt-30 mx-auto bg-white shadow-lg rounded-3xl p-10 border border-gray-100">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {data?.title.charAt(0).toUpperCase() + data?.title.slice(1)}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <i>{data?.body}</i>
        </p>
        <p className="text-gray-800 font-semibold text-lg ">UserId: {data?.userId}</p>
        <Link
          className="text-blue-600 hover:underline mt-4 inline-block"
          to="/posts"
        >
          {"<-- Back to posts"}
        </Link>
      </div>
    </div>
  );
};

export default PostsDetail;
