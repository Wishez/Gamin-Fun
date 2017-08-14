import React from 'react';

const MyRoute = ({ 
    component: Component, 
    ...rest 
}) => (
   <Route {...rest} render={props => (
	  	<Component {...props}/>
  	)}/>
)
export default MyRoute;
