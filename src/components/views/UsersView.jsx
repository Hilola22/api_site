import React from "react";
import { useNavigate } from "react-router-dom";

const UsersView = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {data?.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer p-6 flex flex-col items-center text-center border border-gray-100"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-4">
            {user.username[0]}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {user.username}
          </h3>
          <p className="text-gray-600">{user.name}</p>
          <p className="text-gray-400 text-sm mt-2">{user.email}</p>
          <button
            onClick={() => navigate(`/users/${user.id}`)} 
            className="mt-4 px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg shadow hover:bg-indigo-600 transition"
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
