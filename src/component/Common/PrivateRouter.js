import React from "react";
import { Navigate, Route, PathRouteProps } from 'react-router-dom'
import { Admin } from "../layout";

function PrivateRouter() {
    // Check user is logged in
    // if yes, show router
    // else  redirect to LoginPage
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if(!isLoggedIn) return <Navigate to="/login" />
    return ( <Route path='admin' element={<Admin/>}/> );
}

export {PrivateRouter} ;