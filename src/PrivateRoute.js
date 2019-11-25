import React, { Component } from 'react'
import * as Cookies from 'js-cookie'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'


export function PrivateRoute({ children, reverse = false, ...rest }) {
    if(reverse) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (Cookies.get('token') == undefined) ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/tableaudebord",
                    state: { from: location }
                }}
                />
            )
            }
        />
        );
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          (Cookies.get('token') != undefined) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/connexion",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute
