import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

const Footer = () => (
  <footer className='footer'> 
    <Container>
      <ul className='footerContacts'>
        <li className='footerContactsItem'>
          <a href='mailto:renome@intrenalmail.ru'
            className='footerContactsItem__refer'>
            <Icon name='envelope'
              size='tiny'
              className='footerContacts__icon' />
            <span>shiningfinger@list.ru</span>
          </a>
        </li>
        <li className='footerContactsItem'>
          <a href='skype:shiningfinger?chat'
             className='not-follow footerContactsItem__refer'>
            <Icon name='skype'
              size='tiny'
              className='footerContacts__icon' />
            <span>shiningfinger</span>
          </a>
        </li>
      </ul>
      <p className='copyright'>
          &copy;&nbsp;Filipp Zhuravlev &mdash; my template for quickly starting new project
      </p>
    </Container>
  </footer>
);

export default Footer;