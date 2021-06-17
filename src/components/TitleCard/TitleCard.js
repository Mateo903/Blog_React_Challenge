import React from 'react'
import {useHistory} from "react-router"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom"


import './titlecard.css'

const TitleCard = (props) => {

  const history = useHistory()


  return (
    <div className='title-card-container'>
      <div className='title-container'><p>{props.title}</p></div>
      <div className='buttons-container'>
        <a href='http://www.google.com' target="_blank" className='delete-button' rel="noreferrer"><DeleteIcon/></a>
        <a href='http://www.google.com' target="_blank" className='edit-button' rel="noreferrer"><EditIcon/></a>
        <Link to={`/posts/${props.postId}`} ><ArrowForwardIcon/></Link>
      </div>
    </div>
  )
}

export default TitleCard
