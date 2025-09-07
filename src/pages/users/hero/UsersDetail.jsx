import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

const UsersDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500 text-lg">Loading...</div>
    );

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        {error?.response?.data?.message}
      </div>
    );
  }
  const letters = data?.name
    ? data?.name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("")
    : "";

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-3xl p-10 mt-30 border border-gray-100">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {letters}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{data?.username}</h2>
          <p className="text-gray-600 text-lg">{data?.name}</p>
        </div>
        <div className="w-full text-left rounded-2xl p-6 shadow-inner">
          <p className="mb-2">
            <span className="font-semibold">📧 Email:</span> {data?.email}
          </p>
          <p className="mb-2">
            <span className="font-semibold">📞 Phone:</span> {data?.phone}
          </p>
          <p className="mb-2">
            <span className="font-semibold">🌐 Website:</span>{" "}
            <a
              href={`http://${data?.website}`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {data?.website}
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold">🏢 Company:</span>{" "}
            {data?.company?.name}
          </p>
          <p>
            <span className="font-semibold">🏠 Address:</span>{" "}
            {data?.address?.street}, {data?.address?.city}
          </p>
        </div>
        <Link className="text-blue-600 hover:underline" to={"/users"}>
          {"<-- Back to users"}
        </Link>
      </div>
    </div>
  );
};

export default UsersDetail;
