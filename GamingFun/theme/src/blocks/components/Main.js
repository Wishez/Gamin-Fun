import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import NotFoundContainer from './../containers/NotFoundContainer';
import NewsContainer from './../containers/NewsContainer';
import SingleNewsContainer from './../containers/SingleNewsContainer';
import RegisterContainer from './../containers/RegisterContainer';
import ContactsContainer from './../containers/ContactsContainer';
import RulesContainer from './../containers/RulesContainer';
import PersonalRoomContainer from './../containers/PersonalRoomContainer';
import RecoverPasswordContainer from './../containers/RecoverPasswordContainer';
import MainPageContainer from './../containers/MainPageContainer';
import MyRoute from './../components/MyRoute';
import SuccessPaymentRoute from './../containers/SuccessPaymentRoute';
import InventoryContainer from './../containers/InventoryContainer';

const Main = ({
    ...rest,
    isLogged,
    site,
    username
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
                <MyRoute path='/:site/personal_room'
                    component={PersonalRoomContainer} />
                {!isLogged ?
                    <MyRoute path='/:site/remember_password'
                        component={RecoverPasswordContainer} /> : ''}
                <MyRoute path='/:site/inventory'
                        component={InventoryContainer} /> 
                <SuccessPaymentRoute 
                    successUrl='/minecraft/robokassa_success/'
                    redirectPath='/minecraft/personal_room'
                    username={username}
                    getUserDataUrl='/get_user_last_payment/'
                /> 
                <Route render={() => (
                    <Redirect to="/" />
                )}  />

            </Switch>
      </RouteTransition>
    )} />
    </main>
);

export default Main;