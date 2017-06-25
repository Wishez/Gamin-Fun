import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from 'semantic-ui-react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false,
        activAbout: false,
        activeSecond: false,
        activeThird: false,
        activeFourth: false
    };

    this.getActiveClass = this.getActiveClass.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.changeActiveSecond = this.changeActiveSecond.bind(this);
    this.changeActiveFirst = this.changeActiveFirst.bind(this);
    this.changeActiveThird = this.changeActiveThird.bind(this);
    this.changeActiveFourth = this.changeActiveFourth.bind(this);
    this.cleanActiveState = this.cleanActiveState.bind(this);
  }
  
  openMenu() {
    let $navList = $('#navList');
    
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
    }
  }

  cleanActiveState() {
    this.setState({
      activeFirst: false,
      activeSecond: false,
      activeThird: false,
      activeFourth: false
    });

  }

  changeActiveFirst() {
    this.cleanActiveState();

    this.setState({activeFirst: true});
  }
  changeActiveSecond() {
    this.cleanActiveState();

    this.setState({activeSecond: true});
  }
  changeActiveThird() {
    this.cleanActiveState();

    this.setState({activeThird: true});

  }
  changeActiveFourth() {
    this.cleanActiveState();

    this.setState({activeFourth: true});

  }

  componentDidMount() {
    this.changeActiveFirst();
  }

   
  render() {

    const { activeFirst, activeSecond, activeThird, activeFourth } = this.state;

    return (
        <nav className='navigaton'>
          <button id='openMenuButton'
            className='navigation__openMenuButton visible-xs'
            onClick={this.openMenu}>
            <Icon name='bars' size='big' />
          </button>
          <ul className='navList'
              id='navList'>
            <li className={this.getActiveClass(activeFirst)}>
              <Link to='/'
                className='navItem__refer'
                onClick={this.changeActiveFirst}>
                Fisrt nav item
              </Link>
            </li>
            <li className={this.getActiveClass(activeSecond)}>
              <Link to='/second'
                className='navItem__refer'
                onClick={this.changeActiveSecond}>
                Second nav item
              </Link>
            </li>
            <li className={this.getActiveClass(activeThird)}>
              <Link to='/third'
                className='navItem__refer'
                onClick={this.changeActiveThird}>
                Third nav item
              </Link>
            </li>
            <li className={this.getActiveClass(activeFourth)}>
              <Link to='/fourth' 
                className='navItem__refer'
                onClick={this.changeActiveFourth}>
                Fourth nav item
              </Link>
            </li>
          </ul>
        </nav>
    );
  }


  getActiveClass(state) {
    return  classNames({
      'navItem': true,
      'active': state
    });

  }
}