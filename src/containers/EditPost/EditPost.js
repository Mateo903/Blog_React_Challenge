import React, {useState, useEffect} from 'react'
import CreatePost from '../CreatePost/CreatePost'
import { useParams } from 'react-router'
import axios from 'axios'

const EditPost = () => {
  const [data, setData] = useState({})
  const {id} = useParams()
  const APIUrl = 'https://jsonplaceholder.typicode.com/posts'

  const reqAPI = async() =>{
    const req = await axios({
        method: 'GET', 
        url: `${APIUrl}/${id}`,
      })

    setData(req.data)
    console.log(req)
  }

  useEffect(()=>{
    reqAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const conditionalRender = (n) => {
    if(n!== undefined){
      return(
        <CreatePost 
        title='Edit the Post'
        method='PUT'        
        contentValue={data.body}
        titleText={data.title}
        buttonText='Edit the Post'
        urlId={`${APIUrl}/${id}`}
      />
      )
    }
  }


  return (
    <div>
      {conditionalRender(data.title)}
    </div>
  )
}

export default EditPost
