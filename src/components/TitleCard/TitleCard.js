import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom"


import './titlecard.css'


const TitleCard = (props) => {
  


  return (
    <div className='title-card-container'>
      <div className='title-container'><p>{props.title}</p></div>
      <div className='buttons-container'>
        <div className='delete-button' onClick={() => props.handleDelete(props.postId)} ><DeleteIcon/></div>
        <Link to={`/editpost/${props.postId}`} className='edit-button'><EditIcon/></Link>
        <Link to={`/posts/${props.postId}`} className='arrow-button'><ArrowForwardIcon/></Link>
      </div>
    </div>
  )
}

export default TitleCard
