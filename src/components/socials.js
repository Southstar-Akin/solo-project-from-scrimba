import react from 'react'
import  ReactDOM  from 'react-dom/client'
import './styles/socials.css'
import twitter from './styles/Twitter.png'
import github from './styles/GitHub.png'
import instagram from './styles/Instagram.png'
import facebook from './styles/Facebook.png'


function Socials(){
  return (
      <div className='socials'>
        <a href="#"><img src={twitter} alt="" /></a>
        <a href="#"><img src={facebook} alt="" /></a>
        <a href="#"><img src={instagram} alt="" /></a>
        <a href="#"><img src={github} alt="" /></a>
      </div>
  );
}

export default Socials