import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { loadState } from '../utility/localStorage'
import styled from 'styled-components'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import PageNotFound from '../containers/PageNotFound'
import Dashboard from '../containers/Dashboard'

const Container = styled.div`
  margin: 0 auto;
  position: relative;
`;

const checkAuthentication = {
  isAuthenticated: loadState('token') ? true : false,
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props => checkAuthentication.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    )}
  />
}

export const Routes = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </Router>
  )
};
