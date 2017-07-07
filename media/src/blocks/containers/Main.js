import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
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
        <Route exact path='/:site' render={props => (
            <FadeIn>
                <NewsContainer {...rest} 
                    {...props}
                    isLogged={isLogged} />                   
            </FadeIn>
        )} />
        <Route path='/:site/news/:newsId' render={props => (
            <FadeIn>
                <SingleNewsContainer {...rest} 
                    {...props}
                    isLogged={isLogged} />
            </FadeIn>
        )} />
        <Route path='/:site/registration' render={props => (
            <FadeIn>
                <RegisterContainer {...rest}  
                    {...props}
                    isLogged={isLogged}/>
    		</FadeIn>
    	)} />
    	<Route path='/:site/download' render={props => (
    		<FadeIn>
    			<DownloadContainer {...rest} 
                    {...props} 
                    isLogged={isLogged}/>
    		</FadeIn>
    	)} />
    	<Route path='/:site/contacts' render={props => (
    		<FadeIn>
    			<ContactsContainer {...rest}
                    {...props}
                    isLogged={isLogged} />
    		</FadeIn>
    	)} />
        <Route path='/:site/rules' render={props => (
            <FadeIn>
                <RulesContainer {...rest}
                isLogged={isLogged}
                {...props} />
            </FadeIn>
        )} />
        {isLogged ?
            <Route path='/:site/personal_room' render={props => (
                 <FadeIn>
                    <PersonalRoomContainer {...rest}
                        {...props}
                        isLogged={isLogged} />
                        
                </FadeIn>
             )} /> : ''}
        {!isLogged ?
            <Route path='/:site/remember_password' render={props => (
                 <FadeIn>
                    <ForgotPasswordContainer {...rest}
                        {...props}
                        isLogged={isLogged} />
                </FadeIn>
         )} /> : ''}
    	<Route render={() => (
           <Redirect to="/" />
        )} />
    </Switch>
  </main>
);

export default Main;