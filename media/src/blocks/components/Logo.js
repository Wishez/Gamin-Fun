import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = ({
	site,
	changeSite
}) => (
  <div className={`brand brand--${site}`}>
    <Link to='/' 
       className='brand__refer'
       onClick={() => {
       		changeSite('');
       }}>
      <figure className='brand__name'></figure>
    </Link>
  </div>
);

export default Logo;