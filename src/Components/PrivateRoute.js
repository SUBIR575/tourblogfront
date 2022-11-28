import React,{useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom';


export { PrivateRoute };

function PrivateRoute({ children }) {
     
    const profile = JSON.parse(localStorage.getItem("profile"));
    
    
    if (!profile) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }

    // authorized so return child components
    return children;
}