import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import NotFound from './../components/NotFound';
import FadeIn from 'react-fade-in';
import { Container } from 'semantic-ui-react';
import NewsContainer from './NewsContainer';

const Main = ({...rest}) => (
  <main className='main'>
  	<Switch>         
    	<Route exact path='/' render={() => (
    		<FadeIn>
    			<NewsContainer {...rest} />
    		</FadeIn>
    	)} />
    	<Route path='/register' render={() => (
    		<FadeIn>
    			<section>It is second section!</section>
    		</FadeIn>
    	)} />
    	<Route path='/strat_playing' render={() => (
    		<FadeIn>
    			<section>It is third section!</section>
    		</FadeIn>
    	)} />
    	<Route path='/contacts' render={() => (
    		<FadeIn>
    			<section>It is fourth section!</section>
    		</FadeIn>
    	)} />
        <Route path='/rules' render={() => (
            <FadeIn>
                <section>It is fifth section!</section>
            </FadeIn>
        )} />
    	<Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;