import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const PostDetail = () => {
  const [data, setData] = useState({})
  const {id} = useParams()
  const APIUrl = 'https://jsonplaceholder.typicode.com/posts'

  const reqAPI = async() =>{
    const req = await axios({
        method: 'GET', 
        url: `${APIUrl}/${id}`,
      })

    setData(req.data)
    console.log(req.data)
  }

  useEffect(()=>{
    reqAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default PostDetail
