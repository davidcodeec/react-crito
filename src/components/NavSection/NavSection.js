import React from 'react'
import './NavSection.css';
import Button from '../Generics/Button';
import img_logotype from '../../assets/images/Logo.svg'

const NavSection = () => {
  return (
    <div className='mt-5'>
       <img className='' src={img_logotype} alt=''/>
      NavSection
      <Button text="Login" url="/login.html" />
    </div>
  )
}

export default NavSection