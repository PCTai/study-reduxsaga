import React from "react";
import { Redirect, Route} from 'react-router-dom';
import Admin from "../layout/Admin";


function PrivateRouter(props) {
    // Check user is logged in
    // if yes, show router
    // else  redirect to LoginPage
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if(!isLoggedIn) return <Redirect to="/login" />
    return ( <Route {...props} ><Admin/> </Route>);
}

export {PrivateRouter} ;