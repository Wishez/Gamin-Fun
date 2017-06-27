import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import NotFound from './../components/NotFound';
import FadeIn from 'react-fade-in';
import { Container } from 'semantic-ui-react';
import NewsContainer from './NewsContainer';

const Main = () => (
  <main>
  	<Switch>         
    	<Route exact path='/' render={() => (
    		<FadeIn>
    			<NewsContainer />
    		</FadeIn>
    	)} />
    	<Route path='/second' render={() => (
    		<FadeIn>
    			<section>It is second section!</section>
    		</FadeIn>
    	)} />
    	<Route path='/third' render={() => (
    		<FadeIn>
    			<section>It is third section!</section>
    		</FadeIn>
    	)} />
    	<Route path='/fourth' render={() => (
    		<FadeIn>
    			<section>It is fourth section!</section>
    		</FadeIn>
    	)} />
        <Route path='/fifth' render={() => (
            <FadeIn>
                <section>It is fifth section!</section>
            </FadeIn>
        )} />
    	<Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;