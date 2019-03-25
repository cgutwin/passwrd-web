import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/*
* The private route, which accepts a target component and other values to pass to the route (...rest).
* Will just check to see if the user is authenticated, and if so, forward to the passed target component.
* If not, will send back to login.
*
* TODO: Send to login page, but change login page to reflect failure.
*
* PrivateRoute value is dependent on the authentication state.
* */
const PrivateRoute = ({ component: Component, props, ...rest }) => {
  return (
    <Route {...rest}
      render={routeProps => (
        props.accountStatus.status
          ? <Component {...routeProps}/>
          : <Redirect to={'/'}/>
      )}
    />
  )
}

export default PrivateRoute
