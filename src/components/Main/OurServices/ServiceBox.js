import React from 'react'

const ServiceBox = ({title, discription, url}) => {
  return (
    <div className="services-card-button sevice-box">
              <h3>{title}</h3>
              <p>{discription}</p>
              <a href={url}><button className="btn-play"><i className="fa-solid fa-play"></i></button></a>
     </div>
  )
}

export default ServiceBox