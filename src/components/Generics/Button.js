import React from 'react'


// You can declare a function containing the parameters text and url which is used in ShowcaseSection.js or in general

const Button = ({text, url}) => {
  return (
    <a className="btn-yellow" href={url}>
        {text}
    <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  )
}

export default Button