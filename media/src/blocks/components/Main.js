import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import FadeIn from 'react-fade-in';
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
import FadeInRoute from './../components/FadeInRoute';

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
        <FadeInRoute exact path='/:site'
            component={NewsContainer} />
        <FadeInRoute path='/:site/news/:newsId'
            component={SingleNewsContainer} />
        <FadeInRoute path='/:site/registration'
            component={RegisterContainer} />
        <FadeInRoute path='/:site/contacts'
            component={ContactsContainer} />
        <FadeInRoute path='/:site/rules'
            component={RulesContainer} />   
        {isLogged ?
            <FadeInRoute path='/:site/personal_room'
                component={PersonalRoomContainer} /> : ''}
        {!isLogged ?
            <FadeInRoute path='/:site/remember_password'
                component={RecoverPasswordContainer} /> : ''}
        <Route render={() => (
           <Redirect to="/" />
        )} />
    </Switch>
  </main>
);

export default Main;
// <FadeInRoute path='/:site/download'
//     component={DownloadContainer} />  