import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TitleCard from '../../components/TitleCard/TitleCard'

import './home.css'


const Home = () => {
  const APIUrl = 'https://jsonplaceholder.typicode.com/posts'

  const [data, setData] = useState([])

  const reqAPI = async() =>{
    const req = await axios({
        method: 'GET', 
        url: APIUrl,
      })

    setData(req.data)
    console.log(req.data)
  }

  useEffect(()=>{
    reqAPI()
  },[])

  return (
    <div className='home-container'>
      {data.map( blog => {
        return(
        <TitleCard key={blog.id} title={blog.title}/>
        )
      })}
    </div>
  )
}

export default Home
