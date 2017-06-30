
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Navigation = ({
    activeFirst,
    activeSecond,
    activeThird,
    activeFourth,
    activeFifth,
    openMenu,
    changeActiveFirst,
    changeActiveSecond,
    changeActiveThird,
    changeActiveFourth,
    changeActiveFifth,
    closeMenu,
    getActiveClasses
}) => (
    <nav className='navigaton'>
      <button id='openMenuButton'
        className='navigation__openMenuButton visible-xs'
        onClick={openMenu}>
        <Icon name='bars' size='big' />

      </button>
      <ul className='navList'
          id='navList'>
        <Icon id='closeMenuButton'
          className='navigation__closeMenuButton'
          name='close'
          size='big'
          onClick={closeMenu} />
        
        <li className={getActiveClasses(activeFirst)}>
          <Link to='/'
            className='navItem__refer'
            onClick={changeActiveFirst}>
            Главная
          </Link>
        </li>
        <li className={getActiveClasses(activeSecond)}>
          <Link to='/registration'
            className='navItem__refer'
            onClick={changeActiveSecond}>
            Регистрация
          </Link>
        </li>
        <li className={getActiveClasses(activeThird)}>
          <Link to='/download'
            className='navItem__refer'
            onClick={changeActiveThird}>
            Скачать
          </Link>
        </li>
        <li className={getActiveClasses(activeFourth)}>
          <Link to='/contacts' 
            className='navItem__refer'
            onClick={changeActiveFourth}>
            Контакты
          </Link>
        </li>
        <li className={getActiveClasses(activeFifth)}>
          <Link to='/rules' 
            className='navItem__refer'
            onClick={changeActiveFifth}>
            Правила
          </Link>
        </li>
        <li className='navItem'>
          <a className='navItem__refer not-follow' 
            href='#'>
            Форум
          </a>
        </li>
      </ul>
    </nav>
);

export default Navigation;