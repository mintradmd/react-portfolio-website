import React from 'react'
import "./About.css"
import ME from '../../assets/ME.JPG'
import {FiAward} from 'react-icons/fi'
import {IoIosSchool} from 'react-icons/io'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src='' alt=''/>
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FiAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working Experience</small>
            </article>

            <article className='about__card'>
              <IoIosSchool  className='about__icon'/>
              <h5>Education</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure veritatis quo neque consectetur nobis accusantium, iusto nesciunt temporibus tempora? Consequatur dolorum, tempore veniam voluptatem molestias quos ipsam molestiae nobis!</small>
            </article>

            <article className='about__card'>
              <AiFillProject  className='about__icon'/>
              <h5>Projects</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure veritatis quo neque consectetur nobis accusantium, iusto nesciunt temporibus tempora? Consequatur dolorum, tempore veniam voluptatem molestias quos ipsam molestiae nobis!</small>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About