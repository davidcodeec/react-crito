import React from 'react'
import ServiceBox from './ServiceBox'
import { useState } from 'react'

const OurServices = () => {

    {/* Using state for const getLatestNews */}
    const [news,setNews] = useState([])

    const services = [

        { title:"Business Advice", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice"},
        { title:"Startup Business", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startupbusiness"},
        { title:"Financial Advice", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice"},
        { title:"Risk Management", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagemnet"},
        

    ]


    {/* Declaring const getLatestNews array for state */}
    const getLatestNews = () => {

      const newsList = [

        { title:"Business Advice", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice"},
        { title:"Startup Business", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startupbusiness"},
        { title:"Financial Advice", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice"},
        { title:"Risk Management", discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagemnet"},
        

      ]

      {/* Second value setNews of the state must always be declared this way to replace the value of setNews to be the array newList  */}
      setNews(()=>{
        let results = newsList
        return results
      })

      // It can also be declared like this the easy way of replaces the value of setNews equal to the array....
      // setNews(newsList)

    }

    


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


               {/* The third way declare an array for newsList then map so it becomes a new object article created Also using State*/}

               {
                news.map((article, index) => (
                    <ServiceBox key={index} title={article.title} discription={article.discription} url={article.url}/>
                ))
              }

            <div className="center-content">
              <a className="btn-black" href="projects.html">Browse Services<i className="fa-solid fa-arrow-up-right"></i></a>
              <a onClick={getLatestNews} className="btn-black" >Get News From button<i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default OurServices