import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import styled from 'styled-components'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import PageNotFound from '../containers/PageNotFound'

const Container = styled.div`
  margin: 0 auto;
  position: relative;
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props => props.isAuthenticated ? (
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

export const Routes = () => (
  <Router>
    <Container>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={PageNotFound} />
        <PrivateRoute path="/protected" component={Home} />
      </Switch>
    </Container>
  </Router>
);
