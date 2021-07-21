import React from 'react'
import { LogoStyles } from './styles'

export default function Logo() {
    return (
      <LogoStyles className="logo">
        <div className="inner">
          <span className="est">EST 1994</span>
          <h1>
            <span className="slicks">
              <span className="letter S">S</span>
              <span className="letter l">l</span>
              <span className="letter i">i</span>
              <span className="letter c">c</span>
              <span className="letter k">k</span>
            </span>
            <span className="slices">slices</span>
          </h1>
        </div>
      </LogoStyles>
    );
  }