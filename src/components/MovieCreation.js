import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'

const MovieCreation = () => {
  const navigate=useNavigate()
  const[title,setTitle]=useState('')
  const[description,setDescription]=useState('')
  const[releaseYear,setReleaseYear]=useState('')
  const[poster,setPoster]=useState('')

  const handleChange = (e)=>{
    if(e.target.name==='title'){
      setTitle(e.target.value)
    }else if(e.target.name==='description'){
      setDescription(e.target.value)
    }else if(e.target.name==='releaseYear'){
      console.log(e.target.value)
      setReleaseYear(e.target.value)
    }else if(e.target.name==='poster'){
      setPoster(e.target.files[0])
      console.log(e.target.files[0])
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(title.length===0||description.length===0||releaseYear.length===0||poster.length===0){
      alert('Please Fill The Required Fields')
    }
    else{
      const formData=new FormData()
      formData.append('title',title)
      formData.append('description',description)
      formData.append('releaseYear',releaseYear)
      formData.append('poster',poster)
      const resetForm=()=>{
        setTitle('')
        setDescription('')
        setReleaseYear('')
        setPoster('')
      }
      axios.post('http://localhost:3031/api/movies/create',formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      .then((response)=>{
        console.log(response.data)
        if(response.data?._id){
         alert('movie creation successfull')
         navigate('/')
         resetForm()
        }
      })
      .catch((err)=>{
        console.log(err.messaage)
      })
    }
  }
  return (
    <div className='container mt-5'>
        <div>

          <h2>Create Movie</h2>

          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text"
              defaultValue={title} 
              name='title' 
              placeholder="Enter Title" 
              onChange={handleChange} 
              style={{width:"500px"}}  />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" 
                defaultValue={description} 
                name='description' placeholder="Enter Description" 
                onChange={handleChange} 
                style={{width:"500px"}} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Release Date</Form.Label>
              <Form.Control 
              type="date" 
              defaultValue={releaseYear} 
              name='releaseYear' 
              placeholder="Enter Date" 
              onChange={handleChange} 
              style={{width:"500px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Poster</Form.Label>
              <Form.Control type="file" 
              defaultValue={poster} 
              name='poster' 
              onChange={handleChange} 
              style={{width:"500px"}}/>
            </Form.Group>

          <Button variant="outline-primary" type="submit" style={{width:"150px"}}>
              Create Movie
          </Button>
      </Form>
     </div>
    </div>
  )
}

export default MovieCreation
