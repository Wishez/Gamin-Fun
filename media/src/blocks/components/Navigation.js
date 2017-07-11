
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Navigation = ({
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem,
    openMenu,
    changeActiveNavigationItem,
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
        
        <li className={getActiveClasses(firstNavItem.active, site)}>
          <Link to={`/${site}`}
            className={`navItem__refer navItem__refer--${site}`}
            onClick={() => {
              changeActiveNavigationItem('firstNavItem');
            }}>
            {firstNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(secondNavItem.active, site)}>
          <Link to={`/${site}/registration`}
            className={`navItem__refer navItem__refer--${site}`}
            onClick={() => {
              changeActiveNavigationItem('secondNavItem');
            }}>
            {secondNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(thirdNavItem.active, site)}>
          <Link to={`/${site}/contacts`} 
            className={`navItem__refer navItem__refer--${site}`}
            onClick={() => {
              changeActiveNavigationItem('thirdNavItem');
            }}>
            {thirdNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(fourthNavItem.active, site)}>
          <Link to={`/${site}/rules`}
            className={`navItem__refer navItem__refer--${site}`}
            onClick={() => {
              changeActiveNavigationItem('fourthNavItem');
            }}>
            {fourthNavItem.name}
          </Link>
        </li>
        <li className={`navItem navItem--${site}`}>
          <a className={`navItem__refer navItem__refer--${site} not-follow`}
            href='#'>
            {fifthNavItem.name}
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