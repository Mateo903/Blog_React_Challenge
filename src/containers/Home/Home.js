import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TitleCard from '../../components/TitleCard/TitleCard'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './home.css'


const Home = () => {
  const APIUrl = 'https://jsonplaceholder.typicode.com/posts'

  const [data, setData] = useState([])
  const [page, setPage] = useState({first:0,last:10})

  const nextPage = () =>{
    if (page.last <= data.length-1){
      setPage({
        first:page.first+10,
        last:page.last+10
      })
    }
  }

  const previousPage = () =>{
    if (page.first >0){
      setPage({
        first:page.first-10,
        last:page.last-10
      })
    }
  }

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
      {data.slice(page.first,page.last).map( blog => {

        return(
        <TitleCard key={blog.id} title={blog.title}/>
        )
      })}
      <div className="arrow-container">
        <ArrowBackIosIcon onClick={previousPage} />
        <ArrowForwardIosIcon onClick={nextPage} />
      </div>
    </div>
  )
}

export default Home
