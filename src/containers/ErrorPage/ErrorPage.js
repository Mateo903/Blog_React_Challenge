import React from 'react'
import './ErrorPage.css'
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const ErrorPage = () => {
  const history = useHistory()
  return (
    <div className='error-page-container'>
      <ErrorIcon style={{ fontSize: 100 }}/>
      <h1>Error - The page does not exist</h1>
      <Button variant="contained" color="primary" onClick={()=>history.push("/home")}>
        Back to Home
      </Button>
    </div>
  )
}

export default ErrorPage
