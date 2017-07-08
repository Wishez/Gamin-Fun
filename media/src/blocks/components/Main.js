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
// Нужно абстрагировать в компонент, но  это не работает.;c
// Решу позже.
import FadeInRoute from './../components/FadeInRoute';
        // <FadeInRoute exact path='/'
        //     {...rest}
        //     isLogged={isLogged}
        //     component={NewsContainer} 
        // />        
// isLogged будет извлекаться из состояния пользователя
        // <Route exact path='/:site' render={props => (
        //     <FadeIn>
        //         <NewsContainer {...rest} 
        //             {...props}
        //         />                   
        //     </FadeIn>
        // )} />
        // <Route path='/:site/news/:newsId' render={props => (
        //     <FadeIn>
        //         <SingleNewsContainer {...rest} 
        //             {...props} />
        //     </FadeIn>
        // )} />
        // <Route path='/:site/registration' render={props => (
        //     <FadeIn>
        //         <RegisterContainer {...rest}  
        //             {...props} />
        //     </FadeIn>
        // )} />
        // <Route path='/:site/download' render={props => (
        //     <FadeIn>
        //         <DownloadContainer {...rest} 
        //             {...props} 
        //              isLogged={isLogged}/>
        //     </FadeIn>
        // )} />
        // <Route path='/:site/contacts' render={props => (
        //     <FadeIn>
        //         <ContactsContainer {...rest}
        //             {...props}
        //             isLogged={isLogged} />
        //     </FadeIn>
        // )} />
        //  <Route path='/:site/rules' render={props => (
        //     <FadeIn>
        //         <RulesContainer {...rest}
        //         isLogged={isLogged}
        //         {...props} />
        //     </FadeIn>
        // )} />
        //  <Route path='/:site/personal_room' render={props => (
             //     <FadeIn>
             //        <PersonalRoomContainer {...rest}
             //            {...props} />
                        
             //    </FadeIn>
             // )} /> 
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
        <FadeInRoute path='/:site/download'
            component={DownloadContainer} />  
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