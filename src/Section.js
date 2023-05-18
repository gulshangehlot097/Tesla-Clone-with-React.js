import React from 'react'
import './section.css'


function Section(props) {
  return (
    <section style={{backgroundImage:"url(Images/"+props.background+")"}}>
      <div className='model'>
        <h1>{props.name}</h1>
        <p>{props.title}</p>
      </div>
      <div className='anchor'>
       <div className='button'>
        <a href='#' className='left'>{props.leftbtn}</a>
         {props.rightbtn &&  <a href='#' className='right'>{props.rightbtn}</a>}
       </div>
       {props.arrow && <img src='Images/down-arrow.svg' alt='Down arrow' /> }
       
      </div>
     
    </section>
  )
}

export default Section