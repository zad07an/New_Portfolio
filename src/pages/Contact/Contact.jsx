import React from 'react'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin,VscGithub, RiTelegramLine} from 'react-icons/all'
import './Contact.css'

export default function Contact({theme}) {

  // const darkContactBackground = { background: theme ? '#160129' : '#A884E8' }
  // const darkDisplayContact = {background: theme ? '#311169' : '#7A3BE4'}
  const darkContactBackground = { background: theme ? '#2d2d2d' : '#fafafafa' }
  const darkDisplayContact = { background: theme ? '#fafafafa' : '#2d2d2d' }
  const darkTitle = { color: theme ? '#fff' : '#000' }
  const darkText = { color: theme ? '#000' : '#fff' }


  return (
    <div className='contact_container' style={darkContactBackground}>
      <div className="contact_page_title">
        <h2 style={darkTitle}>Contact</h2>
      </div>
      <div className="social_icons_container" style={darkDisplayContact}>
        <div className="social_icons_text">
          <p style={darkText}>You can follow and contact with me here!</p>
        </div>
        <div className="social_icons">
          <a href='https://www.instagram.com/zad07an_/' target='_blank' className="social_box">
            <p style={darkText}><AiOutlineInstagram/></p>
            <span style={darkText}>Instagram</span>
          </a>
          <a href='https://www.facebook.com/aram.zadoyan' target='_blank' className="social_box">
            <p style={darkText}><AiOutlineFacebook/></p>
            <span style={darkText}>Facebook</span>
          </a>
          <a href='https://www.linkedin.com/in/aram-zadoyan-b3344b247/' target='_blank' className="social_box">
            <p style={darkText}><AiOutlineLinkedin/></p>
            <span style={darkText}>LinkedIn</span>
          </a>
          <a href='https://github.com/zad07an' target='_blank' className="social_box">
            <p style={darkText}><VscGithub/></p>
            <span style={darkText}>Github</span>
          </a>
          <a href='https://t.me/zad07an' target='_blank' className="social_box">
            <p style={darkText}><RiTelegramLine/></p>
            <span style={darkText}>Telegram</span>
          </a>
        </div>
      </div>
    </div>
  )
}
