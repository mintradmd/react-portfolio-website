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
            <img src={ME} alt='me'/>
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
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</small>
            </article>

            <article className='about__card'>
              <AiFillProject  className='about__icon'/>
              <h5>Projects</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit!</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus nihil neque culpa itaque aut. Facere voluptate perferendis temporibus exercitationem in labore itaque? Reiciendis aliquam molestias vel, velit voluptas accusantium!</p>
          <a href='#contact' className='btn btn-primary'>contact</a>
        </div>
      </div>
    </section>
  )
}

export default About