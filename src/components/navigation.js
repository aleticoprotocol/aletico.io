import React from 'react';
import {useState} from "react";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Aletico
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Proof of Athletics
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#nft' className='page-scroll'>
                NFT Cards
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Teams
              </a>
            </li>
            <li>
              <a href='https://aleticoprotocol.github.io/documentation/' target="_blank" rel="noopener noreferrer" className='page-scroll'>
                Docs
              </a>
            </li>
            <li>
              <a href='https://aleticoprotocol.github.io/whitepaper/' target="_blank" rel="noopener noreferrer" className='page-scroll'>
                Whitepaper
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navigation;