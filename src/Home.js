import React, {useState, useEffect} from 'react'
import axios from 'axios'


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
    <div>
      {data.map( blog => {
        return(
        <div>
          <h4>{blog.title}</h4>
          <hr/>
        </div>
        )
      })}
    </div>
  )
}

export default Home
