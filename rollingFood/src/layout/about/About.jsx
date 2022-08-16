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
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEw5IjC_hr6Hw/profile-displayphoto-shrink_800_800/0/1618840808208?e=1666224000&v=beta&t=wEar-kG4D30TSbJUbFQGcMxj50Y-XYCGFmgtpH6f7kE" alt="" />
          <h3>Facundo Medina</h3>
        </div>
        <div className='member'>
          <img src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/290320302_5280257588731368_4841580584439717889_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFcBiHnJciItjJoLOKeh5rR2EtVYoLmXBLYS1ViguZcEjpJvwSSdW3MwoVQG9QQ6Eyrad1EY1W7rHZhltIeDqoB&_nc_ohc=ymjNTdpKTvIAX_FPToe&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT9-AX8oHBuB5cnDVJ1YluLigWMg0VxDWoT_9V9s7ZaR0g&oe=6300344E" alt="" />
          <h3>Federico Lopez Pondal</h3>
        </div>
      </div>
    </div>
  )
}