import React from 'react'
import ServiceBox from './ServiceBox'

const OurServices = () => {

    const services = [

        { title:"Business Advice", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice"},
        { title:"Startup Business", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startupbusiness"},
        { title:"Financial Advice", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice"},
        { title:"Risk Management", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagemnet"},
        

    ]


  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="services-cards">
          <div className="services-box-button services-section-box">

            {/* There are tow ways of using the ServiceBox first one below */}

            <ServiceBox title="Business Advice" discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice"/>
            <ServiceBox title="Startup Business" discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness"/>
            <ServiceBox title="Financial Advice" discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice"/>
            <ServiceBox title="Risk Management" discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagemnet"/>
            
            {/* The second way declare an array for services then map so it becomes a new object*/}

              {
                services.map((service, index) => (
                    <ServiceBox key={index} title={service.title} discription={service.discription} url={service.url}/>
                ))
              }

            <div className="center-content">
              <a className="btn-black" href="projects.html">Browse Services<i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default OurServices