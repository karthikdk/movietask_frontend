import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
const MovieDetails = () => {
    const[movie,setMovie]=useState({})
    const{movieId}=useParams()
    console.log(movieId)
    useEffect(()=>{
        axios.get(`http://localhost:3031/api/movies/show/${movieId}`)
        .then((response)=>{
            // console.log(response.data)
            if(response.data?._id){
                setMovie(response.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },[movieId])

  return (
    <div className='container mt-5'>
     <Link to="/" className='fs-3'>back</Link>
      <Card className='mt-3'>
        <Card.Header>
            <h3>Title: {movie.title} </h3>
            <h3>Description: {movie.description} </h3>
            <h3>ReleaseYear: {movie.releaseYear?.split('T')[0]} </h3>
        </Card.Header>
        <Card.Body>
            <div className='d-flex justify-content-center'>
                <img src={`http://localhost:3031/${movie.poster}`} alt='' style={{width:'50%',height:'400px'}}></img>
            </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default MovieDetails
