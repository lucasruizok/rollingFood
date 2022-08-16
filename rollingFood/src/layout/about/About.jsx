import React from 'react'
import './about.css';

export const About = () => {
  return (
    <div className='section-container'>
      <h1>SOBRE NOSOTROS</h1>
      <div className='about-container'>
        <div className='member'>
          <img src="https://rollingmusic.netlify.app/assets/team/Lucas.jpg" alt="" />
          <h3>Lucas Ruiz</h3>
        </div>
        <div className='member'>
          <img src="https://rollingmusic.netlify.app/assets/team/Daniel.jpeg" alt="" />
          <h3>Daniel Andriani</h3>
        </div>
        <div className='member'>
          <img src="https://turinoa.netlify.app/assets/images/DIEGO.jpg" alt="" />
          <h3>Diego Garcia</h3>
        </div>
        <div className='member'>
          <img src="https://www.picattoo.com/wp-content/uploads/2021/02/Instagram-Profile-Picture-tips.png" alt="" />
          <h3>Facundo Medina</h3>
        </div>
        <div className='member'>
          <img src="https://www.picattoo.com/wp-content/uploads/2021/02/Instagram-Profile-Picture-tips.png" alt="" />
          <h3>Federico Lopez Pondal</h3>
        </div>
      </div>
    </div>
  )
}