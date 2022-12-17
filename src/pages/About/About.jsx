import React from 'react'
import './About.css'

export default function About({theme}) {

  const aboutDark = theme ? 'about_banner_dark' : ''

  return (
    <section className={`about_container ${aboutDark}`}>
      <div className="about_page_title">
        <h2>About</h2>
      </div>
      <div className='about_banner_light'>
        <div className="about_banner_text">
          <p>Hi, I am Aram Zadoyan, 22 years old, Front-End Developer.  I live in Vedi, Ararat State, Republic of Armenia.  In 2018, I entered the National Agrarian University of Armenia.  On January 10, 2019, I was drafted into the compulsory military service of the Armed Forces of the Republic of Armenia.  I participated in the 44-day Armenian-Azerbaijani war.  I was discharged on January 11, 2021.  I left university in 2021 and entered IT in February 2022.  In October, I finished the web programming course at SFS (Smart Fox System) and now I work there.  That's all about me, thank you.</p>
        </div>
      </div>
    </section>
  )
}
