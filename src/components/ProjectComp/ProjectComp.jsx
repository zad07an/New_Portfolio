import React from 'react'
import './ProjectComp.css'

export default function ProjectComp({ project, theme, idx }) {

  // const darkTheme = { background: theme ? '#000' : '#fff' }
  // const darkImage = {border: theme ? '1px solid black' : 'none'}
  const darkText = {color: theme ? '#fff' : '#000'}

  const projectIndexIsOddStyle = idx % 2 !== 0 ? 'is_odd' : '';

  return (
    <div className={`project_component_container ${projectIndexIsOddStyle}`}>
        <div className="project_component_image" style={{background: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: !theme ? '0 0 8px gray' : 'none'}}></div>
        <div className="project_component_desc">
          <h3 style={darkText}>{project.app_name.substring(0, 30)}{project.app_name.length >= 30 && '...'}</h3>
          <p style={darkText}>{project.text.substring(0, 400)}{project.text.length >= 400 && '...'}</p>
        </div>
    </div>
  )
}
