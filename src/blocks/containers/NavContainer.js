import React, { Component } from 'react';
import Navigation from './../components/Navigation';

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
    
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
    }
  }

  cleanActiveState = () => {
    this.setState({
      activeFirst: false,
      activeSecond: false,
      activeThird: false,
      activeFourth: false,
      activeFifth: false
    });

  }

  changeActiveFirst = () => {
    this.cleanActiveState();

    this.setState({activeFirst: true});
  }
  changeActiveSecond = () => {
    this.cleanActiveState();

    this.setState({activeSecond: true});
  }
  changeActiveThird = () => {
    this.cleanActiveState();

    this.setState({activeThird: true});

  }
  changeActiveFourth = () => {
    this.cleanActiveState();

    this.setState({activeFourth: true});

  }


  changeActiveFifth = () => {
    this.cleanActiveState();

    this.setState({activeFifth: true});    
  }
   
  render() {
    return (
        <Navigation {...this.state} 
            changeActiveFirst={this.changeActiveFirst}
            changeActiveSecond={this.changeActiveSecond}
            changeActiveThird={this.changeActiveThird}
            changeActiveFourth={this.changeActiveFourth}
            changeActiveFifth={this.changeActiveFifth}
        />
    );
  }
}