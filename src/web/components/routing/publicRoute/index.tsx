// Base Imports
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AppRoutes } from "../../../router/appRoutes";

export const PublicRoute = (props: any) => {
  const { isAuthenticated } = props;
  
  return  isAuthenticated ? (
    <Redirect to={AppRoutes.LANDING} />
  ) : (
    <Route {...props} component={props.component} render={undefined} />
  );

};

