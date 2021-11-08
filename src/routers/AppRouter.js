import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch

} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
// import { authReducer } from "../auth/authReducer";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
   
  
  const {user} = useContext(AuthContext);
  // console.log(user);
  
  return (
        <Router>
        <div>

  
         
          <Switch>
        
           <PublicRoute
            exact
             path="/login" 
             isAuthenticated={user.logged}
             component={LoginScreen}/> 


           
           {/* //vamos a cambiar route por private route */}
           <PrivateRoute 
            path="/" 
            component={DashboardRoutes}
            isAuthenticated={user.logged}
            /> 
           
          </Switch>
        </div>
      </Router>
    )
}
