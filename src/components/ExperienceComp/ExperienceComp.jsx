import React from 'react'
import './ExperienceComp.css'

export default function ExperienceComp({ exp, theme, idx }) {

  const darkExpBox = { background: theme ? '#000' : '#fafafafa' }
  const darkExpBoxText = {color: theme ? '#fff' : '#000'}
  const expIndexIsOddStyle = idx % 2 !== 0 ? 'is_odd' : '';
  const expNamePercentIsOdd = idx % 2 !== 0 ? 'exp_name_is_odd' : '';

  return (
    <div className={`experience_component_box ${expIndexIsOddStyle}`}>
      <div className='experience_name_percent'>
        <div className={`experience_name ${expNamePercentIsOdd}`}>
          <h3 style={darkExpBoxText}>{exp.exp_name}</h3>
        </div>
        <div className={`experience_percent ${expNamePercentIsOdd}`}>
          <p style={darkExpBoxText}>Skill {exp.percente}%</p>
          <div className='percente_line'>
            <div className='skill_line'></div>
          </div>
        </div>
      </div>
      <div className="experience_icon">
        <img src={exp.img} />
      </div>
    </div>
  )
}
