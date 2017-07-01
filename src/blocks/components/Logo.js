import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = ({
	site
}) => (
  <div className={`brand brand--${site}`}>
    <Link to='/' 
       className='brand__refer'>
      <figure className='brand__name'></figure>
    </Link>
  </div>
);

export default Logo;