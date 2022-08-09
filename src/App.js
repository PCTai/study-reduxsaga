import React, { useEffect } from 'react';
import studentApi from './api/studentApi';
import { Routes,Route,Navigate } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { Admin } from './component/layout';
import { NotFound } from './component/Common';
import { Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { authActions } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch()
  const handleLogoutClick =() =>{
    dispatch(authActions.logout());
  }
  // useEffect (() =>{
  //   studentApi.getAllStudent().then(response => console.log(response))
  // })
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  return (<>
   <Button variant='contained' color='primary' onClick={handleLogoutClick}>Logout</Button>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/admin" element={!isLoggedIn ? <Navigate to="/login" /> : <Admin/>}/>
      {/* NOT Found */}
      <Route path='*'  element={<NotFound/>}/>
    </Routes>
  </>
  );
}

export default App;
