import React from 'react'
import './about.css';
import imgLucas from '../../assets/imgMembers/Lucas.png';
import imgDiego from '../../assets/imgMembers/Diego.png';
import imgDaniel from '../../assets/imgMembers/Daniel.png';
import imgNoVisible from '../../assets/imgMembers/noVisible.png';

export const About = () => {
  const members = [
    {
      key:1,
      imgMember:imgLucas,
      nameMember:'Lucas Ruiz'
    },
    {
      key:2,
      imgMember:imgDiego,
      nameMember:'Diego Garcia'
    },
    {
      key:5,
      imgMember:imgDaniel,
      nameMember:'Daniel Andriani'
    },
    {
      key:4,
      imgMember:imgNoVisible,
      nameMember:'Facundo Medina'
    },
    {
      key:5,
      imgMember:imgNoVisible,
      nameMember:'Federico Lopez Pondal'
    },
  ]
  return (
    <div className='section-container'>
      <h1 className='textColorRolling'>SOBRE NOSOTROS</h1>
      <div className='about-container px-2'>
        {
          members.map((member)=>{
            return <div className='member'>
              <img src={member.imgMember} 
                   alt={`Es la imagen del miembo ${member.nameMember}`}
                   className='imgMember'/>
              <h3>{member.nameMember}</h3>
            </div>
          })
        }
      </div>
    </div>
  )
}