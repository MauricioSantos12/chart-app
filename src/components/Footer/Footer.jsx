import React from 'react'
import './footer.scss'
import { Github, Linkedin, Twitter, Mail } from 'feather-icons-react/build/IconComponents';


const Footer = () => {
  let year = new Date();
  year = year.getFullYear();
  return (
    <section className='container--footer' id="footer">
      <h5>Living, learning, & leveling up one day at a time.</h5>
      <footer>
        <a href='#' target='_blank' className='container--icon'> <Linkedin className='icon' /> </a>
        <a href='#' target='_blank' className='container--icon'> <Github className='icon' /> </a>
        <a href='#' target='_blank' className='container--icon'> <Twitter className='icon' /> </a>
        <a href="#" target='_blank' className='container--icon'> <Mail className='icon' /> </a>
      </footer>
      <div className='container--copy'>
        <p className="copy">Copyright {year} &copy; </p>
      </div>
    </section>
    
  )
}

export default Footer