import React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import { NavStyles } from './styles'

export default function Nav() {
    return (
      <NavStyles>
        <ul>
          <li>
            <Link to="/">Hot Now</Link>
          </li>
          <li>
            <Link to="/pizzas/">Pizza Menu</Link>
          </li>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/slicemasters">SliceMasters</Link>
          </li>
          <li>
            <Link to="/order">Order Ahead!</Link>
          </li>
        </ul>
      </NavStyles>
    );
  }