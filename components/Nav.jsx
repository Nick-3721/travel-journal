import React from 'react'
import Logo from '../src/assets/N-logo.svg'

export default () => {
  return (
    <>
    <header>
      <div className="wrapper">
        <img src={Logo} alt="N-logo" className='header--logo' />
        <p className="header--title">Nick & Jess' Travel Journal</p>
      </div>
    </header>
    </>
  )
}