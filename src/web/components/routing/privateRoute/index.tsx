// Base Imports
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AppRoutes } from "../../../router/appRoutes";

// Other Imports

export const PrivateRoute = (props: any) => {
  const { isAuthenticated } = props;

    return isAuthenticated? (
      <Route {...props} component={props.component} render={undefined} />
    )
    :
    (
      <Redirect to={AppRoutes.LOGIN}/>
    )
    ;
  };