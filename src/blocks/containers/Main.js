import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import NotFound from './../components/NotFound';
import FadeIn from 'react-fade-in';
import NewsContainer from './NewsContainer';
import RegisterContainer from './RegisterContainer';
import RulesContainer from './RulesContainer';
import DownloadContainer from './DownloadContainer';
import ContactsContainer from './ContactsContainer';
import PersonalRoomContainer from './PersonalRoomContainer';
// isLogged будет извлекаться из состояния пользователя
const Main = ({
    ...rest,
    isLogged
}) => (
  <main className='main'>
    <Switch>         
        <Route exact path='/' render={() => (
            <FadeIn>
                <NewsContainer {...rest} 
                    isLogged={isLogged} />
            </FadeIn>
        )} />
        <Route path='/registration' render={() => (
            <FadeIn>
                <RegisterContainer {...rest} 
                    isLogged={isLogged}/>
    		</FadeIn>
    	)} />
    	<Route path='/download' render={() => (
    		<FadeIn>
    			<DownloadContainer {...rest} 
                    isLogged={isLogged}/>
    		</FadeIn>
    	)} />
    	<Route path='/contacts' render={() => (
    		<FadeIn>
    			<ContactsContainer {...rest}
                    isLogged={isLogged} />
    		</FadeIn>
    	)} />
        <Route path='/rules' render={() => (
            <FadeIn>
                <RulesContainer {...rest}/>
            </FadeIn>
        )} />
        {isLogged ?
            <Route path='/personal_room' render={() => (
                 <FadeIn>
                    <PersonalRoomContainer {...rest}
                        isLogged={isLogged} />
                </FadeIn>
             )} /> : ''}
    	<Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;