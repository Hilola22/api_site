import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Home from "./home";
import Login from "./login";
import MainLayout from "./layout";
import UsersDetail from "./users/hero/UsersDetail";
import Users from "./users";
import Posts from "./posts";
import PostsDetail from "./posts/hero/PostsDetail";
import Signup from "./signup";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostsDetail />} />
          <Route path="/users/:id" element={<UsersDetail />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter