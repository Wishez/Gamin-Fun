import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';


import NotFoundContainer from './../containers/NotFoundContainer';
import NewsContainer from './../containers/NewsContainer';
import SingleNewsContainer from './../containers/SingleNewsContainer';
import RegisterContainer from './../containers/RegisterContainer';
import DownloadContainer from './../containers/DownloadContainer';
import ContactsContainer from './../containers/ContactsContainer';
import RulesContainer from './../containers/RulesContainer';
import PersonalRoomContainer from './../containers/PersonalRoomContainer';
import RecoverPasswordContainer from './../containers/RecoverPasswordContainer';
import MainPageContainer from './../containers/MainPageContainer';
import MyRoute from './../components/MyRoute';

const Main = ({
    ...rest,
    isLogged,
    site
}) => (
    <main className='main'>
    <Route render={({ location }) => (
        <RouteTransition 
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
        >
            <Switch className='test' style={{opacity: 0}}
             key={location.key} 
             location={location}>
                <Route exact path='/' render={props => (
                        <MainPageContainer 
                            {...rest}
                            {...props} 
                        />                   
                )} />
                <MyRoute exact path='/:site'
                    component={NewsContainer} />
                <MyRoute path='/:site/news/:newsId'
                    component={SingleNewsContainer} />
                <MyRoute path='/:site/registration'
                    component={RegisterContainer} />
                <MyRoute path='/:site/contacts'
                    component={ContactsContainer} />
                <MyRoute path='/:site/rules'
                    component={RulesContainer} />   
                {isLogged ?
                    <MyRoute path='/:site/personal_room'
                        component={PersonalRoomContainer} /> : ''}
                {!isLogged ?
                    <MyRoute path='/:site/remember_password'
                        component={RecoverPasswordContainer} /> : ''}
                    <Route render={() => (
                        <Redirect to="/" />
                )}  />

            </Switch>
      </RouteTransition>
    )} />
    </main>
);

export default Main;
// Add component if it is needed.
// <FadeInRoute path='/:site/forum'
//     component={NotFoundContainer} />  
// <FadeInRoute path='/:site/download'
//     component={DownloadContainer} />  