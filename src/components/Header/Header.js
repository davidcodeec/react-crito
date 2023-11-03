import React, { useState } from 'react'
import NavSection from '../NavSection/NavSection'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import img_backgroundlines from '../../assets/images/Image6.png'
import Logo from './MainHeaderMenu/Logo';
import Menu from './MainHeaderMenu/Menu';
import SocialMedia from './MainHeaderMenu/SocialMedia';
import MainMenu from './MainHeaderMenu/MainMenu';
import Button from '../../components/Generics/Button';

// Note: To import a css code *
import './Header.css';

// Note: Test code check Index.html for code.....Do for header main and footer * *
// This shows how to import an image and declare an image variable in tag*

const Header = () => {
  const [showMenu,setshowMenu] = useState(false)
  //const [btnClasses, setBtnClasses] = useState('main-menu')

  const toggleMenu = () => {
    console.log('Toggle Menu clicked');
    setshowMenu(!showMenu);
    //setBtnClasses(!setshowMenu ? 'main-menu active' : 'main-menu')
  }

  const btnClasses = showMenu ? 'main-menu active' : 'main-menu';

  return (
    <header>
       <div className='container'>
       
        <img className='' src={img_backgroundlines} alt=''/>
        <button className={btnClasses} onClick={toggleMenu}><i className="fa-sharp fa-solid fa-bars"></i></button>

        {showMenu && (
          <>
          <Logo />
          <Menu />
          <SocialMedia />
          <MainMenu />
          <Button type="login" title="Login" url="/login.html" />
          <NavSection />
          <ShowcaseSection />

          </>
        )}
      
       </div>
    </header>
  )
}

export default Header