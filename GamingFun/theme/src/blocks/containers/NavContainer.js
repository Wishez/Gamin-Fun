import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navigation from './../components/Navigation';
import { selectNavigationItem } from './../actions/navigationActions.js';

class NavContainer extends Component {
  static PropTypes = { 
      site: PropTypes.string.isRequired,
      firstNavItem: PropTypes.object.isRequired,
      secondNavItem: PropTypes.object.isRequired,
      thirdNavItem: PropTypes.object.isRequired,
      fourthNavItem: PropTypes.object.isRequired,
      fifthNavItem: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
      isLogged: PropTypes.bool.isRequired
  }

  state = {
      isOpen: false
  };

  openMenu = () => {
    let $navList = $('#navList');
    let $closeButton = $('#closeMenuButton');
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $closeButton.show();
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
      $closeButton.hide();
    }
  };

  changeActiveNavigationItem = navigationItem => {
      const { dispatch } = this.props;

      dispatch(selectNavigationItem(navigationItem));
      // Меню закрывается.
      if (this.state.isOpen)
          this.closeMenu();
  };

  getActiveClasses = (state, site) => ( 
    classNames({
      'navItem': true,
      [`navItem--${site}`]: true,
      'active': state
    })
  );
   
  closeMenu = () => {
    let $navList = $('#navList');
    if (window.innerWidth < 767) $navList.hide('fast');
  }

  render() {
    return (
        <Navigation {...this.props}
            getActiveClasses={this.getActiveClasses}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
            changeActiveNavigationItem={this.changeActiveNavigationItem}
        />
    );
  }
}


const mapStateToProps = state => {
  const { 
     selectedSite,
     navigation,
     dataBySite 
   } = state;

  const {
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem
  } = navigation;
  
  const {
    isLogged
  } = dataBySite[selectedSite];
  return {
    site: selectedSite,
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem,
    isLogged
  }
}

export default withRouter(connect(mapStateToProps)(NavContainer));