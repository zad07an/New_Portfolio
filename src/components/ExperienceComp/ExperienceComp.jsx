import React from 'react'
import './ExperienceComp.css'

export default function ExperienceComp({ exp, theme }) {

  const darkExpBox = { background: theme ? '#000' : '#fafafafa' }
  const darkExpBoxText = {color: theme ? '#fff' : '#000'}

  return (
    <div className='experience_component_box' style={darkExpBox}>
      <div className="experience_name_percent">
        <div className="experience_name">
          <h3 style={darkExpBoxText}>{exp.exp_name}</h3>
        </div>
        <div className="experience_percent">
          <p style={darkExpBoxText}>Skill {exp.percente}%</p>
          <div className='percente_line'>
            <div className='skill_line' style={{width: `${exp.percente}%`}}></div>
          </div>
        </div>
      </div>
      <div className="experience_icon">
        <img src={exp.img} />
      </div>
    </div>
  )
}
