import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading){
        return <span className="loading loading-dots loading-xl"></span> 
    }

    if (!user)
        <Navigate to="/signin" state={location.pathname}></Navigate>
    return children;

}

export default PrivateRoute;