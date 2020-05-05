
import useLocalStorage from './useLocalStorage';
import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";


export function PrivateRoute({ children, ...rest }) {
  const [session, setSession] = useLocalStorage('session', '');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        session ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export function LoginRoute({ children, ...rest }) {
  const [session, setSession] = useLocalStorage('session', '');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !session ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}