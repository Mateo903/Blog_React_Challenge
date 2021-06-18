import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router'
import { Button } from '@material-ui/core'

import './PostDetail.css'

const PostDetail = () => {
  const [data, setData] = useState({})
  const {id} = useParams()
  const APIUrl = 'https://jsonplaceholder.typicode.com/posts'
  const history = useHistory()

  const reqAPI = async() =>{
    try{
      const req = await axios({
          method: 'GET', 
          url: `${APIUrl}/${id}`,
        })
      if (req.status !== 200) {
          throw new Error(`HTTP error! status: ${req.status}`);
      }else{
        setData(req.data)
        console.log(req)
      }
    } catch (error) {
      history.push('/404')
      console.log(error)
    }
  }

  useEffect(()=>{
    reqAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  return (
    <div className='post-page-container'>
      <div className='post-detail-container'>
        <div className='post-title-container'>
          <h1>{data.title}</h1>
        </div>
        <div className='post-content-container'>
          <p>{data.body}</p>
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={()=>history.push("/home")}>
        Back to Home
      </Button>
    </div>
  )
}

export default PostDetail
