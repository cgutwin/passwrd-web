import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { getAccountStatus } from './api/'
import PrivateRoute from './components/router/PrivateRoute'
import Loading from './components/pages/Loading/'
import Login from './components/pages/Login/'
import Passwords from './components/pages/Passwords/'
import PageNotFound from './components/pages/404/'
import routerConfig from './config/router'

const initialAccountStatus = {
  status: 'loading',
  data: {
    UserID: null,
    Username: null
  }
}

function App () {
  const [ accountStatus, setAccountStatus ] = useState(initialAccountStatus)
  
  useEffect(() => {
    getAccountStatus()
      .then(result => setAccountStatus(result.data))
  },[])
  
  // if the status is loading, show loading
  // then, if false, show the login page
  // else, show the dashboard
  return (
    <Fragment>
      { accountStatus.status === 'loading'
        ? <Loading/>
        : (
          <Router basename={routerConfig.basename}>
            <Switch>
              <Route exact path={'/'} render={() => (
                accountStatus.status
                  ? <Redirect push to='/passwords'/>
                  : <Login setAccountStatus={setAccountStatus}/>
              )}/>
              <PrivateRoute path={'/passwords'} component={Passwords} props={{accountStatus: accountStatus}}/>
              {/* Alias '/login' to '/'*/}
              <Redirect from={'/login'} to={'/'}/>
              <Route exact path={'/loading'} component={Loading}/>
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
        )}
    </Fragment>
  )
}

export default App
