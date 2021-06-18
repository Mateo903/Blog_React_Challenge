import React, {useState, useEffect} from 'react'
import CreatePost from '../CreatePost/CreatePost'
import { useParams, useHistory } from 'react-router'
import axios from 'axios'
import './EditPost.css'

const EditPost = () => {
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
