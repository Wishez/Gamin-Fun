
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

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
          color='white'
          onClick={closeMenu} />
        
        <li className={getActiveClasses(activeFirst)}>
          <Link to='/'
            className='navItem__refer'
            onClick={changeActiveFirst}>
            Главная
          </Link>
        </li>
        <li className={getActiveClasses(activeSecond)}>
          <Link to='/second'
            className='navItem__refer'
            onClick={changeActiveSecond}>
            Регистрация
          </Link>
        </li>
        <li className={getActiveClasses(activeThird)}>
          <Link to='/third'
            className='navItem__refer'
            onClick={changeActiveThird}>
            Начать играть
          </Link>
        </li>
        <li className={getActiveClasses(activeFourth)}>
          <Link to='/fourth' 
            className='navItem__refer'
            onClick={changeActiveFourth}>
            Контакты
          </Link>
        </li>
        <li className={getActiveClasses(activeFifth)}>
          <Link to='/fifth' 
            className='navItem__refer'
            onClick={changeActiveFifth}>
            Правила
          </Link>
        </li>
        <li className='navItem'>
          <a className='navItem__refer' 
            href='#'>
            Форум
          </a>
        </li>
      </ul>
    </nav>
);

export default Navigation;