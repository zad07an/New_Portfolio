import React from 'react'
import './ProjectComp.css'

export default function ProjectComp({ project, theme }) {

  const darkTheme = { background: theme ? '#000' : '#fff' }
  // const darkImage = {border: theme ? '1px solid black' : 'none'}
  const darkText = {color: theme ? '#fff' : '#000'}

  return (
    <div className='project_component_container' style={darkTheme}>
        <div className="project_component_image" style={{background: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: !theme ? '0 0 8px gray' : 'none'}}></div>
        <div className="project_component_desc">
        <h3 style={darkText}>{project.app_name.substring(0, 20)}{project.app_name.length >= 20 && '...'}</h3>
        <p style={darkText}>{project.text.substring(0, 300)}{project.text.length >= 200 && '...'}</p>
        </div>
    </div>
  )
}
