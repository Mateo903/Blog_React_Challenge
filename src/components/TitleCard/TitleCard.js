import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './titlecard.css'

const TitleCard = (props) => {


  return (
    <div className='title-card-container'>
      <div className='title-container'><p>{props.title}</p></div>
      <div className='buttons-container'>
        <a href='http://www.google.com' className='delete-button'><DeleteIcon/></a>
        <a className='edit-button'><EditIcon/></a>
        <a className='arrow-button'><ArrowForwardIcon/></a>
      </div>
    </div>
  )
}

export default TitleCard
