import React from 'react'
import ExperienceComp from '../../components/ExperienceComp/ExperienceComp'
import { ExperienceData } from '../../Data/ExperienceData'
import './Experience.css'

export default function Experience({ theme }) {

  // const darkExperienceBackground = { background: theme ? '#160129' : '#A884E8' }
  // const darkDisplayExperience = {background: theme ? '#311169' : '#7A3BE4'}
  const darkExperienceBackground = { background: theme ? '#2d2d2d' : '#fafafafa' }
  const darkDisplayExperience = { background: theme ? '#fafafafa' : '#2d2d2d' }
  const darkTitle = { color: theme ? '#fff' : '#000' }

  return (
    <section className='experience_container' style={darkExperienceBackground}>
      <div className="experience_page_title">
        <h2 style={darkTitle}>Experience</h2>
      </div>
      <div className="display_experience" style={darkDisplayExperience}>
        {
          ExperienceData.map((exp) => {
            return <ExperienceComp key={exp.id} exp={exp} theme={theme} />
          })
        }
      </div>
    </section>
  )
}
