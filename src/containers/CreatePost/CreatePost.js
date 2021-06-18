import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import './CreatePost.css'
import axios from 'axios'

const CreatePost = () => {
  const history = useHistory()
  const [dataToSend,setDataToSend] = useState({title:'', body:''})
  const [errorTitle, setErrorTitle] = useState({error: false, text:''})
  const [errorContent, setErrorContent] = useState({error: false, text:''})
  const APIUrl = 'https://jsonplaceholder.typicode.com/posts'

  const reqAPI = async() =>{
    const req = await axios({
        method: 'POST', 
        url: APIUrl,
        data: dataToSend,
      })
      console.log(req)
  }

  const handleClick = () =>{
    if(!(errorTitle.error || errorContent.error) && dataToSend.title!==''){
      reqAPI()
    }
  }

  
  return (
    <div className="create-post-container">
      <div className='title-container'>
        <p>Create a New Post</p>
      </div>
      <div className="title-field" >
        <TextField  
          id="title-field" 
          label="Title" 
          fullWidth
          required
          helperText={errorTitle.text}
          error={errorTitle.error}
          onChange={e => {
            setDataToSend({...dataToSend, title: e.target.value})
            if(e.target.value === ''){
              setErrorTitle({error:true, text: 'must not be empty.'})
            }else{
              setErrorTitle({error:false, text: ''})
            }
          }}
        />
      </div>
      <div className="content-field" >
        <TextField  
          id="content-field" 
          label="Content" 
          variant="outlined" 
          multiline 
          rows={10} 
          rowsMax={20}
          fullWidth
          required
          helperText={errorContent.text}
          error={errorContent.error}
          onChange={e => {
            setDataToSend({...dataToSend, body: e.target.value})
            if(e.target.value === ''){
              setErrorContent({error:true, text: 'must not be empty.'})
            }else{
              setErrorContent({error:false, text: ''})
            }
          }}
        />
      </div>
      <div className="buttons-create-post-container">
        <div className="button-create">
          <Button variant="contained" color="primary" onClick={handleClick}>
          Create Post
          </Button>
        </div>
        <div className="button-back">
          <Button variant="contained" color="secondary" onClick={()=>history.push("/home")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
