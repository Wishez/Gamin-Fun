
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
    getActiveClasses,
    site
}) => (
    <nav className={`navigaton navigation--${site}`}>
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
        
        <li className={getActiveClasses(activeFirst, site)}>
          <Link to={`/${site}`}
            className={`navItem__refer navItem__refer--${site}`}
            onClick={changeActiveFirst}>
            Главная
          </Link>
        </li>
        <li className={getActiveClasses(activeSecond, site)}>
          <Link to={`/${site}/registration`}
            className={`navItem__refer navItem__refer--${site}`}
            onClick={changeActiveSecond}>
            Регистрация
          </Link>
        </li>
        <li className={getActiveClasses(activeFourth, site)}>
          <Link to={`/${site}/contacts`} 
            className={`navItem__refer navItem__refer--${site}`}
            onClick={changeActiveFourth}>
            Контакты
          </Link>
        </li>
        <li className={getActiveClasses(activeFifth, site)}>
          <Link to={`/${site}/rules`}
            className={`navItem__refer navItem__refer--${site}`}
            onClick={changeActiveFifth}>
            Правила
          </Link>
        </li>
        <li className={`navItem navItem--${site}`}>
          <a className={`navItem__refer navItem__refer--${site} not-follow`}
            href='#'>
            Форум
          </a>
        </li>
      </ul>
    </nav>
);

export default Navigation;
        // <li className={getActiveClasses(activeThird, site)}>
        //   <Link to={`/${site}/download`}
        //     className={`navItem__refer navItem__refer--${site}`}
        //     onClick={changeActiveThird}>
        //     Скачать
        //   </Link>
        // </li>