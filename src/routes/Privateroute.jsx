import React, { Component, useState } from "react";
import { Navigate } from "react-router-dom";


import { UserAuth } from "../context/AuthContext";
import ChatScreen from "../component/ChatScreen";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    const {currentUser} = UserAuth();
    
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser ? true : false);


//   {currentUser ? setIsAuthenticated(currentUser) : setIsAuthenticated(false)}
if (isAuthenticated) {
    return < ChatScreen  />
} else {
     <Navigate to="/" replace />
}
//   return isAuthenticated ? (
//     // <Component {...rest} />
//     < ChatScreen  />
//   ) : (
//     <Navigate to="/" replace />
//   );
};

export default PrivateRoute;
