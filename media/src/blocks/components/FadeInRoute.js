import {Route} from 'react-router-dom';
import React from 'react';
import FadeIn from 'react-fade-in';

const FadeInRoute  = ({
	...rest,
	isLogged,
	...route,
	component: Component
}) => (
	<Route {...route} render={props => (
        <FadeIn>
            <Component {...rest} 
            	{...props}
            	isLogged={isLogged} />
        </FadeIn>
     )} />
);

export default FadeInRoute;
