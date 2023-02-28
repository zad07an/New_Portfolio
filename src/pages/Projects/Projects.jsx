import React from 'react'
import ProjectComp from '../../components/ProjectComp/ProjectComp'
import { ProjectsData } from '../../Data/ProjectsData'
import './Projects.css'

export default function Projects({ theme }) {

  // const containerDark = { background: theme ? '#160129' : '#A884E8' }
  // const projectsDark = { background: theme ? '#311169' : '#7A3BE4' }
  const containerDark = { background: theme ? '#2d2d2d' : '#fafafafa' }
  const projectsDark = { background: theme ? '#fafafafa' : '#2d2d2d' }
  const darkTitle = {color: theme ? '#fff' : '#000'}
  const darkSubtitle = {color: theme ? '#fff' : '#000'}

  return (
    <section className='project_container' style={containerDark}>
        <div className="project_page_title">
            <h2 style={darkTitle}>Projects</h2>
        </div>
        <div className="projects_banner">
            <div className="project_desc">
                <p style={darkSubtitle}>Here is projects made by me</p>
            </div>
            <div className="projects_list">
            {
              ProjectsData.map((project, idx) => {
                return <ProjectComp key={project.id} idx={idx} project={project} theme={theme} />
              })
            }
            </div>
        </div>
    </section>
  )
}
