import React from 'react'
import { Route } from 'react-router-dom'

function PropRoute ({ component: Component, props, ...rest }) {
  return (
    <Route {...rest} render={routeProps => (
      <Component {...routeProps} {...props}/>
    )}/>
  )
}

export default PropRoute
