import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/original.svg';

const Header = () = (
  <div className='header'>
    <Link className='logo-container' to='/'>

    </Link>
  </div>
)

export default function Header;