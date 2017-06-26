import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import classNames from 'classnames';

export default class NavContainer extends Component {
  state = {
      isOpen: false,
      activAbout: false,
      activeSecond: false,
      activeThird: false,
      activeFourth: false
  };
  
  componentDidMount() {
    this.changeActiveFirst();
  }

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
  }

  cleanActiveStateAndCloseMenuIfNeed = () => {
    this.setState({
      activeFirst: false,
      activeSecond: false,
      activeThird: false,
      activeFourth: false,
      activeFifth: false
    });
    this.closeMenu();

  }

  changeActiveFirst = () => {
    this.cleanActiveStateAndCloseMenuIfNeed();

    this.setState({activeFirst: true});
  }
  changeActiveSecond = () => {
    this.cleanActiveStateAndCloseMenuIfNeed();

    this.setState({activeSecond: true});
  }
  changeActiveThird = () => {
    this.cleanActiveStateAndCloseMenuIfNeed();

    this.setState({activeThird: true});

  }
  changeActiveFourth = () => {
    this.cleanActiveStateAndCloseMenuIfNeed();
    this.setState({activeFourth: true});

  }
  changeActiveFifth = () => {
    this.cleanActiveStateAndCloseMenuIfNeed();
    this.setState({activeFifth: true});    
  }

  getActiveClasses = state => ( 
    classNames({
      'navItem': true,
      'active': state
    })
  );
   
  closeMenu = () => {
    let $navList = $('#navList');
    if (window.innerWidth < 767) $navList.hide('fast');
  }
  render() {
    return (
        <Navigation {...this.state} 
            changeActiveFirst={this.changeActiveFirst}
            changeActiveSecond={this.changeActiveSecond}
            changeActiveThird={this.changeActiveThird}
            changeActiveFourth={this.changeActiveFourth}
            changeActiveFifth={this.changeActiveFifth}
            getActiveClasses={this.getActiveClasses}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
        />
    );
  }
}