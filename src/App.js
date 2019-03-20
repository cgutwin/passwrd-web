import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/router/PrivateRoute'
import PropRoute from './components/router/PropRoute'
import DashboardTemplate from './templates/dashboardTemplate/'
import Passwords from './components/pages/passwords/'
import Login from './components/pages/login/'
import PageNotFound from './components/pages/404/'
import * as AuthUtil from './util/auth'
import routerConfig from './config/router'

// We can't assume the user isn't logged in so initial values are null, not false.
const initialState = {
  state: null,
  data: {
    id: null,
    username: null
  }
}

function App () {
  const [ isAuthenticated, setIsAuthenticated ] = useState(initialState)
  
  useEffect(() => {
    // Every time App gets loaded (every page nav due to the router) we need to check the login status, since the state
    // gets reset on every navigation (new App() called)
    const getAuthState = async function getAuthState () {
      // state returns true or false
      // TODO: Return additional information about the user from isAuthenticated
      const state = await AuthUtil.isAuthenticated()
      setIsAuthenticated({
        state: state,
        data: {
          id: null,
          username: null
        }
      })
    }
    
    getAuthState()
      .catch(err => console.error(err))
  }, [])
  
  let DashboardView = (
    // Add additional routes down here, they should all be PrivateRoutes and pass the App state hook.
    <DashboardTemplate>
      <PrivateRoute exact path={'/dashboard'}
                    component={Passwords}
                    props={{ isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated}}
      />
      <PrivateRoute exact path={'/dashboard/a'}
                    component={Login}
                    props={{isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated}}
      />
    </DashboardTemplate>
  )
  
  // null means the state hasn't been initialized.
  // The dashboard is shown always within the template, so the loading item is within any sidebars or anything.
  if (isAuthenticated.state === null) {
    DashboardView = (
      <DashboardTemplate>
        <h2>loading</h2>
      </DashboardTemplate>
    )
  }
  
  // Items in the return are for higher level pages only.
  return (
    <Router basename={routerConfig.basename}>
      <Switch>
        <PropRoute exact path={'/'}
                   component={Login}
                   props={{isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated}}
        />
        <Route exact path={'/dashboard'} render={() => DashboardView}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  )
}

export default App
