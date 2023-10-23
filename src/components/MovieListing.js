import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PaginationD from './Pagination'
import { Form } from 'react-bootstrap'

const MovieListing = () => {
    const[movies,setMovies]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5)
    const[search,setSearch]=useState('')

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = movies.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(movies.length / recordsPerPage)

    useEffect(()=>{
      axios.get('http://localhost:3031/api/movies/list')
          .then((response)=>{
              if(response.data.length>0){
                setMovies(response.data)
              }
          })
          .catch((err)=>{
            console.log(err)
          })
    },[movies])

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  const filteredMovie=()=>{
    const result=currentRecords.filter(ele=>{
      return ele.title?.toLowerCase().includes(search) || ele.description?.toLowerCase().includes(search) || ele.releaseYear?.toString().includes(search)
    })
    return result
  }
  const filteredResult=filteredMovie()
  return(
    <div className='container mt-5'>
       <h2 style={{fontStyle:"italic"}}>Movies List</h2>

        <Form className='mt-2'>
          <Form.Control size="lg" type="text" value={search} onChange={handleChange} placeholder="Search" style={{width:"400px"}} />
        </Form>

        <ol className='mt-3'>
          {
            filteredResult.map((movie)=>{
              return <li key={movie.id}><Link to={`/movie-details/${movie._id}`}>{movie.title}</Link></li>
            })
          }
        </ol>
        
        {movies.length > 0 ? <PaginationD 
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        /> : null}
    </div>
  )
}
export default MovieListing
