import { useEffect, useState } from 'react'
import {
  faGithub,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a highly motivated Full Stack Web Developer,I am passionate about
            crafting exceptional digital experiences that enhance businesses and
            positively impact end-users. I thrive in challenging and dynamic
            environments, and I am constantly seeking opportunities to work with
            the latest technologies on diverse and exciting projects.
          </p>
          <p align="LEFT">
            My journey as a Full Stack Web Developer began with a deep-rooted
            passion for continuous learning and self-improvement. Over the
            years, I have honed my skills in software development, sales, online
            marketing, and education to become a well-rounded professional. My
            unwavering determination to achieve success is matched only by my
            commitment to providing significant value to those I work with. With
            a keen eye for detail and a natural curiosity, I am perpetually
            working on improving my skills and knowledge one design and
            development problem at a time.
          </p>
          <p>
            My self-motivation, punctuality, and conscientiousness allow me to
            thrive in any work environment, while my eagerness to learn and
            embrace challenges fuels my personal and professional growth. My top
            three values - continuous improvement, contribution, and empowering
            others to succeed - are integral to everything I do. Whether it's
            creating innovative digital solutions or supporting my colleagues, I
            strive to make a positive impact on those around me. If you are
            looking for a tech-obsessed, dynamic, and dedicated Full Stack Web
            Developer to help take your project to the next level, then look no
            further. I am confident that my passion, skills, and values make me
            the ideal candidate for any challenging project or role.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
