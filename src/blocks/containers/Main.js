import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import FadeIn from 'react-fade-in';
import NotFoundContainer from './NotFoundContainer';
import NewsContainer from './NewsContainer';
import SingleNewsContainer from './SingleNewsContainer';
import RegisterContainer from './RegisterContainer';
import DownloadContainer from './DownloadContainer';
import ContactsContainer from './ContactsContainer';
import RulesContainer from './RulesContainer';
import PersonalRoomContainer from './PersonalRoomContainer';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import MainPageContainer from './MainPageContainer';
// Нужно абстрагировать в компонент, но  это не работает.;c
// Решу позже.
// import FadeInRoute from './../components/FadeInRoute';
        // <FadeInRoute exact path='/'
        //     {...rest}
        //     isLogged={isLogged}
        //     component={NewsContainer} 
        // />        
// isLogged будет извлекаться из состояния пользователя
const Main = ({
    ...rest,
    isLogged,
    site
}) => (
  <main className='main'>
    <Switch>
        <Route exact path='/' render={() => (
            <FadeIn>
                <MainPageContainer {...rest} />                   
            </FadeIn>
        )} />
        <Route path={`/${site}`} render={() => (
            <FadeIn>
                <NewsContainer {...rest} 
                    isLogged={isLogged} />                   
            </FadeIn>
        )} />
        <Route path={`/${site}/news/:newsId`} render={props => (
            <FadeIn>
                <SingleNewsContainer {...rest} 
                    {...props}
                    isLogged={isLogged} />
            </FadeIn>
        )} />
        <Route path={`/${site}/registration`} render={() => (
            <FadeIn>
                <RegisterContainer {...rest} 
                    isLogged={isLogged}/>
    		</FadeIn>
    	)} />
    	<Route path={`/${site}/download`} render={() => (
    		<FadeIn>
    			<DownloadContainer {...rest} 
                    isLogged={isLogged}/>
    		</FadeIn>
    	)} />
    	<Route path={`/${site}/contacts`} render={() => (
    		<FadeIn>
    			<ContactsContainer {...rest}
                    isLogged={isLogged} />
    		</FadeIn>
    	)} />
        <Route path={`/${site}/rules`} render={() => (
            <FadeIn>
                <RulesContainer {...rest}/>
            </FadeIn>
        )} />
        {isLogged ?
            <Route path={`/${site}/personal_room`} render={() => (
                 <FadeIn>
                    <PersonalRoomContainer {...rest}
                        isLogged={isLogged} />
                </FadeIn>
             )} /> : ''}
        {!isLogged ?
            <Route path={`/${site}/remember_password`} render={() => (
                 <FadeIn>
                    <ForgotPasswordContainer {...rest}
                        isLogged={isLogged} />
                </FadeIn>
         )} /> : ''}
    	<Route render={() => (
            <FadeIn>
                <NotFoundContainer {...rest}
                    isLogged={isLogged}/>
            </FadeIn>
        )} />
    </Switch>
  </main>
);

export default Main;