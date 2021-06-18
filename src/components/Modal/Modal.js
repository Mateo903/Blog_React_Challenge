import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import './Modal.css'

const Modal = (props) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(()=>{
    if(props.active){
      setIsActive(true)
      console.log('Modal activo')
    }else{
      setIsActive(false)
      console.log('else')
    }
  }, [props.active, props.update])

  return (
    <div className={isActive ? 'modal active' : 'modal'}>
        <div className='modal-card'>
          <p>Are you sure you want to delete?</p>
          <div className='buttons-modal-container'>
            <Button variant="contained" color="secondary" onClick={()=>{setIsActive(false)}}>
              cancel
            </Button>
            <Button variant="contained" color="primary" onClick={props.handleModalClick}>
              Delete
            </Button>
          </div>
        </div>
      </div>
  )
}

export default Modal
