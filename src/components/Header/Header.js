import React from 'react'
import NavSection from '../NavSection/NavSection'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import img_backgroundlines from '../../assets/images/Image6.png'

// Note: To import a css code *
import './Header.css';


const Header = () => {
  return (
    <header>
       <div className='container'>
        {/* Note: Test code check Index.html for code.....Do for header main and footer * */}
        {/* This shows how to import an image and declare an image variable in tag*/}
        <img className='' src={img_backgroundlines} alt=''/>
       <NavSection/>
       <ShowcaseSection/>
       </div>
    </header>
  )
}

export default Header