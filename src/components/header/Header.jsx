import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import HomePage from '../../pages/homepage/HomePage';

const Header = () = (
  <div className='header'>
    <div className='logo' Link='/' component={HomePage}></div>
  </div>
)

export default function Header;