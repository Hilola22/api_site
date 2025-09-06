import React from "react";
import { useNavigate } from "react-router-dom";

const UsersView = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((user) => (
        <div
          key={user.id}
          className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => navigate(`/users/${user.id}`)}
        >
          <h3 className="font-bold text-lg mb-1">{user.username}</h3>
          <p className="text-gray-600">{user.name}</p>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
