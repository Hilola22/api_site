import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Home from "./home"
import About from "./about"
import Login from "./login"
import MainLayout from './layout'
import UsersDetail from './users/hero/UsersDetail'
import Users from './users'

const AppRouter = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/about/' element={<About/>}/>
              <Route path='/users/:id' element={<UsersDetail/>}/>
              <Route path='*' element={<div>404</div>}/>
            </Route>
            
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </React.Fragment>
  )
}

export default AppRouter