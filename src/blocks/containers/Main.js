import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import NotFound from './../components/NotFound';
import FadeIn from 'react-fade-in';
import NewsContainer from './NewsContainer';
import RegisterContainer from './RegisterContainer';
import RulesContainer from './RulesContainer';
import DownloadContainer from './DownloadContainer';

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
                <RegisterContainer {...rest} />
    		</FadeIn>
    	)} />
    	<Route path='/download' render={() => (
    		<FadeIn>
    			<DownloadContainer {...rest} />
    		</FadeIn>
    	)} />
    	<Route path='/contacts' render={() => (
    		<FadeIn>
    			<section>It is fourth section!</section>
    		</FadeIn>
    	)} />
        <Route path='/rules' render={() => (
            <FadeIn>
                <RulesContainer {...rest}/>
            </FadeIn>
        )} />
    	<Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;