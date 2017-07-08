import React from 'react';
import {Route} from 'react-router-dom';
import FadeIn from 'react-fade-in';

const FadeInRoute = ({ 
    component: Component, 
    ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
)
export default FadeInRoute;
