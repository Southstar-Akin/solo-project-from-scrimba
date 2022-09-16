import react from 'react'
import  ReactDOM  from 'react-dom/client'
import './styles/intro.css'
import me from './styles/me.jpg'


function Intro(){
  return (
      <div className='intro'>
      <img src={me} alt="me" className='mypic'/>
      </div>
  );
}

export default Intro