import React from "react";
import UsersView from "../../../components/views/UsersView";
import { useFetch } from "../../../hooks/useFetch";

const UsersHero = () => {
  const { data, loading, error } = useFetch("/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-30 container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <UsersView data={data} />
    </div>
  );
};

export default UsersHero;
