import React from 'react'
import img_backgroundlines from '../../../../src/assets/images/Logo.svg'
import '../../Header/Header.css';

const Logo = () => {
  return (
    <>
    <div className='logo'>
        <a href="index.html"><img src={img_backgroundlines} alt="Logo"/></a>
      </div>
      <button className="menu-bars"><i className="fa-sharp fa-solid fa-bars"></i></button>
      </>
  )
}

export default Logo