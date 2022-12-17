import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

export default function Home({ theme }) {

  const navigate = useNavigate()
  const darkHome = theme ? 'dark_home' : '';
  const darkButton = theme ? 'dark_button' : 'light_button'
  const darkText = {color: theme ? '#fff' : '#000'}

  return (
    <section className={`home_container ${darkHome}`}>
      <div className='banner'>
        <div className="banner_desc">
          <div className="web_title">
            <span style={darkText}>Front-End Developer</span>
            <h1 style={darkText}>Zadoyan</h1>
          </div>
          <div className="web_text">
            <p style={darkText}>Hey there! I am Aram Zadoyan and I am a 22 years old Armenian Front-End developer.</p>
          </div>
          <div className="banner_buttons">
            <button className={`join_button ${darkButton}`} onClick={() => navigate('/about')}>Read about me</button>
          </div>
        </div>
      </div>
    </section>
  )
}
