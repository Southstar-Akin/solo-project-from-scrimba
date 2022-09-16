import react from 'react'
import  ReactDOM  from 'react-dom/client'
import './styles/message.css'


function Message(){
  return (
      <div className='message'>   
           <div className='contact'>
            <div className="ne">     
             <span>OLUWASEYI AKINBILE</span>
      <span>Frontend Developer</span>
      <small>Nowebsiteyet.com</small>
      </div>

      <div className="buts">
           <button>
                Email
          </button>

            <button>
            LinkedIn
             </button>
    </div>

    </div>
<div className="jo">


      <div className='About'>
        <span>About</span>
        <span>I am a frontend developer with a particular interest 
          in making things simple and automating daily tasks. I try to 
          keep up with security and best practices, and am always looking 
          for new things to learn.
          </span>
      </div>

      <div className='Interest'>
        <span>Interests</span>
        <span>Music Lover, Song Writer, Makeup Artist, Guitarist, Virtual Assistant, Rom Com, Tech</span>
      </div>
      
      </div>

      </div>
  );
}

export default Message