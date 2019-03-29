import React from "react";
import { Route, Redirect } from "react-router-dom";
import authentication from "./helpers/authentication";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
      <Route {...rest} render={props => {
          if (authentication.isAuthenticated()) { console.log('ProtectedRoute, auth: ', authentication.isAuthenticated()); return <Component {...props} />;
          } else {
            console.log('Redirect back home from ProtectedRoute');
            return (
                <Redirect
                  to={{
                    pathname: '/',
                    state: {
                      from: props.location
                    }
                  }}
                />
            );
          }
        }}
      />
  );
};
